import { Injectable, Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from './pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from './pioneer-tree-configuration.model';
import { IPioneerTreeDropParentService, PioneerTreeDropParentService } from '../services/pioneer-tree-drop-parent.service';
import { PioneerTreeDropChildService, IPioneerTreeDropChildService } from '../services/pioneer-tree-drop-child.service';
import { IPioneerTreeDropRootService, PioneerTreeDropRootService } from '../services/pioneer-tree-drop-root.service';
import { IPioneerTreeUidService, PioneerTreeUidService } from '../services/pioneer-tree-uid.service';
import { IPioneerTreeBuildService, PioneerTreeBuildService } from '../services/pioneer-tree-build.service';
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

  /**
   * Collapse all nodes
   * Expand this node and set it as active
   */
  collapseAllExpandThisSetActive(node: IPioneerTreeExpandedNode): void;
}

@Injectable()
export class PioneerTree implements IPioneerTree {
  currentNodes: IPioneerTreeExpandedNode[];
  currentDragNode: IPioneerTreeExpandedNode | undefined;
  currentSelectedNode: IPioneerTreeExpandedNode;

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration,
    @Inject(PioneerTreeBuildService) private buildService: IPioneerTreeBuildService,
    @Inject(PioneerTreeDropRootService) private dropRootService: IPioneerTreeDropRootService,
    @Inject(PioneerTreeDropParentService) private dropParentService: IPioneerTreeDropParentService,
    @Inject(PioneerTreeDropChildService) private dropChildService: IPioneerTreeDropChildService,
    @Inject(PioneerTreeUidService) private uidService: IPioneerTreeUidService,
    @Inject(PioneerTreeExpandCollapseService) private expandCollapseService: IPioneerTreeExpandCollapseService
  ) { }

  buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void {
    this.currentNodes = nodes;
    this.buildService.buildTree(this.currentNodes, configuration);
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

  collapseAllExpandThisSetActive(node: IPioneerTreeExpandedNode): void {
    this.collapseAllNodes();
    node.pioneerTreeNode.setCollapsed(false);
    node.pioneerTreeNode.isCurrentSelectedNode = true;
    this.currentSelectedNode = node;
  }
}
