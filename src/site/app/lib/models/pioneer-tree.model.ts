import { Injectable, Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from './pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from './pioneer-tree-configuration.model';
import { PioneerTreeNode } from './pioneer-tree-node.model';
import { IPioneerTreeDropParentService, PioneerTreeDropParentService } from '../services/pioneer-tree-drop-parent.service';
import { PioneerTreeDropChildService, IPioneerTreeDropChildService } from '../services/pioneer-tree-drop-child.service';
import { IPioneerTreeDropRootService, PioneerTreeDropRootService } from '../services/pioneer-tree-drop-root.service';
import { IPioneerTreeUidService, PioneerTreeUidService } from "../services/pioneer-tree-uid.service";

export interface IPioneerTree {
  /**
   * Track current selected node
   */
  currentDragNode?: IPioneerTreeExpandedNode;

  /**
   * Track current node being dragged
   */
  currentSelectedNode: IPioneerTreeExpandedNode;

  /**
   * Internal tracking of nodes
   */
  currentNodes: IPioneerTreeExpandedNode[];

  /**
   * Build internal tree
   */
  buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void;

  /**
   * Check to see if draggable node is droppable on drag-over event
   */
  isNodeDroppable(nodeId: string): boolean;

  /**
   * Drop currentDragNode event
   */
  dropNode(dropzone: IPioneerTreeExpandedNode, dropType: string, droppedSortIndex: number): void;
}

@Injectable()
export class PioneerTree implements IPioneerTree {
  currentNodes: IPioneerTreeExpandedNode[];
  configuration: PioneerTreeConfiguration;
  currentDragNode?: IPioneerTreeExpandedNode;
  currentSelectedNode: IPioneerTreeExpandedNode;

  /**
   * Limits the amount of time we need to check if the user has
   * defined a binding field of a sort index.
   */
  private userSortIndexPropertySet = false;

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration,
    @Inject(PioneerTreeDropRootService) private dropRootService: IPioneerTreeDropRootService,
    @Inject(PioneerTreeDropParentService) private dropParentService: IPioneerTreeDropParentService,
    @Inject(PioneerTreeDropChildService) private dropChildService: IPioneerTreeDropChildService,
    @Inject(PioneerTreeUidService) private uidService: IPioneerTreeUidService
  ) { }

  buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void {
    this.currentNodes = nodes;

    if (configuration) {
      this.buildConfiguration();
    }

    for (let i = 0; i < this.currentNodes.length; i++) {
      this.currentNodes[i].pioneerTreeNode = new PioneerTreeNode(this.uidService);
      this.currentNodes[i].pioneerTreeNode.config = this.configuration;
      this.currentNodes[i].pioneerTreeNode.currentNode = this.currentNodes[i];
      this.currentNodes[i].pioneerTreeNode.nodesInCollection = this.currentNodes.length;
      this.currentNodes[i].pioneerTreeNode.treeRootNodes = this.currentNodes;
      this.setSortIndex(this.currentNodes[i], i);
      if (this.currentNodes[i][this.configuration.childPropertyName]) {
        this.bindNodesToInternalTracking(this.currentNodes[i][this.configuration.childPropertyName],
          this.currentNodes[i]);
      }
    }
  }

  isNodeDroppable(nodeId: string): boolean {
    if (!this.currentDragNode) {
      return false;
    }

    return nodeId !== this.currentDragNode.pioneerTreeNode.getId();
  }

  dropNode(dropzone: IPioneerTreeExpandedNode, dropType: string, droppedSortIndex: number): void {
    if (!this.currentDragNode) {
      return;
    }
    switch (dropType) {
      case 'root':
        this.dropRootService.dropNode(dropzone, this.currentDragNode, droppedSortIndex);
        break;
      case 'root-end':
        this.dropRootService.dropNode(dropzone, this.currentDragNode, droppedSortIndex, true);
        break;
      case 'parent':
        this.dropParentService.dropNode(dropzone, this.currentDragNode);
        break;
      case 'child':
        this.dropChildService.dropNode(dropzone, this.currentDragNode, droppedSortIndex);
        break;
      case 'child-end':
        this.dropChildService.dropNode(dropzone, this.currentDragNode, droppedSortIndex, true);
        break;
    }

    // remove current drag node tracking
    // TODO: Do we need to remove this
    this.currentDragNode = undefined;
  }

  /**
   * Bind public config to default config
   */
  private buildConfiguration(): void {
    let config = new PioneerTreeConfiguration();
    this.configuration = Object.assign(config, this.configuration);
  }

  /**
   * Recursively build internal tracking tree
   * @param nodes Collection of nodes
   */
  private bindNodesToInternalTracking(nodes: IPioneerTreeExpandedNode[], parent: IPioneerTreeExpandedNode): void {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].pioneerTreeNode = new PioneerTreeNode(this.uidService);
      nodes[i].pioneerTreeNode.config = this.configuration;
      nodes[i].pioneerTreeNode.parentNode = parent;
      nodes[i].pioneerTreeNode.previousNode = nodes[i - 1];
      nodes[i].pioneerTreeNode.currentNode = nodes[i];
      nodes[i].pioneerTreeNode.nodesInCollection = nodes.length;
      this.setSortIndex(nodes[i], i);
      if (nodes[i][this.configuration.childPropertyName]) {
        this.bindNodesToInternalTracking(nodes[i][this.configuration.childPropertyName], nodes[i]);
      }
    }
  }

  /**
   * Bind sort property through configuration
   * @param node Bindable node
   */
  private setSortIndex(node: IPioneerTreeExpandedNode, index: number): void {
    if (node[this.configuration.sortPropertyName]) {
      this.userSortIndexPropertySet = true;
      node.pioneerTreeNode.sortIndex = node[this.configuration.sortPropertyName];
      return;
    }

    node.pioneerTreeNode.sortIndex = index;
  }
}
