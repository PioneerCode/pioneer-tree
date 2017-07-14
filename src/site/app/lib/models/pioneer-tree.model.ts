import { Injectable, Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from './pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from './pioneer-tree-configuration.model';
import { PioneerTreeNode } from './pioneer-tree-node.model';
import { IPioneerTreeDropParentService, PioneerTreeDropParentService } from '../services/pioneer-tree-drop-parent.service';
import { PioneerTreeDropChildService, IPioneerTreeDropChildService } from '../services/pioneer-tree-drop-child.service';
import { IPioneerTreeDropRootService, PioneerTreeDropRootService } from '../services/pioneer-tree-drop-root.service';
import { IPioneerTreeUidService, PioneerTreeUidService } from '../services/pioneer-tree-uid.service';
import { IPioneerTreeExpandCollapseService, PioneerTreeExpandCollapseService } from '../services/pioneer-tree-expand-collapse.service';

export interface IPioneerTree {
  /**
   * Track current selected node
   */
  currentDragNode: IPioneerTreeExpandedNode | undefined;

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
  isNodeDroppable(dropNode: IPioneerTreeExpandedNode): boolean;

  /**
   * Drop currentDragNode event
   */
  dropNode(dropzone: IPioneerTreeExpandedNode, dropType: string, droppedSortIndex: number): void;

  /**
   * Expand all nodes
   */
  expandAllNodes(): void;

  /**
   * Collapse all nodes
   */
  expandAllNodes(): void;
}

@Injectable()
export class PioneerTree implements IPioneerTree {
  currentNodes: IPioneerTreeExpandedNode[];
  currentDragNode: IPioneerTreeExpandedNode | undefined;
  currentSelectedNode: IPioneerTreeExpandedNode;

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration,
    @Inject(PioneerTreeDropRootService) private dropRootService: IPioneerTreeDropRootService,
    @Inject(PioneerTreeDropParentService) private dropParentService: IPioneerTreeDropParentService,
    @Inject(PioneerTreeDropChildService) private dropChildService: IPioneerTreeDropChildService,
    @Inject(PioneerTreeUidService) private uidService: IPioneerTreeUidService,
    @Inject(PioneerTreeExpandCollapseService) private expandCollapseService: IPioneerTreeExpandCollapseService
  ) { }

  buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void {
    this.currentNodes = nodes;

    this.buildConfiguration(configuration);

    for (let i = 0; i < this.currentNodes.length; i++) {
      this.currentNodes[i].pioneerTreeNode = new PioneerTreeNode(this.uidService);
      this.currentNodes[i].pioneerTreeNode.config = this.config;
      this.currentNodes[i].pioneerTreeNode.currentNode = this.currentNodes[i];
      this.currentNodes[i].pioneerTreeNode.nodesInCollection = this.currentNodes.length;
      this.currentNodes[i].pioneerTreeNode.treeRootNodes = this.currentNodes;
      this.setSortIndex(this.currentNodes[i], i);
      if (this.currentNodes[i].pioneerTreeNode.getChildNodes()) {
        this.bindNodesToInternalTracking(this.currentNodes[i].pioneerTreeNode.getChildNodes(), this.currentNodes[i]);
      }
    }
  }

  isNodeDroppable(dropNode: IPioneerTreeExpandedNode): boolean {
    // Guard
    if (!this.currentDragNode) {
      return false;
    }

    // Don't drop on self
    if (dropNode.pioneerTreeNode.getId() === this.currentDragNode.pioneerTreeNode.getId()) {
      return false;
    }

    // Always allow root drops
    if (dropNode.pioneerTreeNode.treeRootNodes && dropNode.pioneerTreeNode.treeRootNodes.length > 0) {
      return true;
    }

    // Don't allow parent to drop in child collection(s)
    if (dropNode.pioneerTreeNode.parentNode.pioneerTreeNode.getId() === this.currentDragNode.pioneerTreeNode.getId()) {
      return false;
    }

    return true;
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

  expandAllNodes(): void {
    this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, false);
  }

  collapseAllNodes(): void {
    this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, true);
  }

  /**
   * Bind public config to default config
   */
  private buildConfiguration(configuration?: IPioneerTreeConfiguration): void {
    let config = new PioneerTreeConfiguration();
    this.config = Object.assign(config, configuration);
  }

  /**
   * Recursively build internal tracking tree
   * @param nodes Collection of nodes
   */
  private bindNodesToInternalTracking(nodes: IPioneerTreeExpandedNode[], parent: IPioneerTreeExpandedNode): void {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].pioneerTreeNode = new PioneerTreeNode(this.uidService);
      nodes[i].pioneerTreeNode.config = this.config;
      nodes[i].pioneerTreeNode.parentNode = parent;
      nodes[i].pioneerTreeNode.previousNode = nodes[i - 1];
      nodes[i].pioneerTreeNode.currentNode = nodes[i];
      nodes[i].pioneerTreeNode.nodesInCollection = nodes.length;
      this.setSortIndex(nodes[i], i);
      nodes[i].pioneerTreeNode.getChildNodes();
      if (nodes[i].pioneerTreeNode.getChildNodes()) {
        this.bindNodesToInternalTracking(nodes[i].pioneerTreeNode.getChildNodes(), nodes[i]);
      }
    }
  }

  /**
   * Bind sort property through configuration
   * @param node Bindable node
   */
  private setSortIndex(node: IPioneerTreeExpandedNode, index: number): void {
    if (node[this.config.sortPropertyName]) {
      node.pioneerTreeNode.sortIndex = node[this.config.sortPropertyName];
      return;
    }

    node.pioneerTreeNode.sortIndex = index;
  }
}
