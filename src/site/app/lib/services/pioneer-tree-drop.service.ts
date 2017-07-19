import { Injectable, Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { IPioneerTreeDropParentService, PioneerTreeDropParentService } from '../services/pioneer-tree-drop-parent.service';
import { PioneerTreeDropChildService, IPioneerTreeDropChildService } from '../services/pioneer-tree-drop-child.service';
import { IPioneerTreeDropRootService, PioneerTreeDropRootService } from '../services/pioneer-tree-drop-root.service';

export interface IPioneerTreeDropService {
  getCurrentDragNode(): IPioneerTreeExpandedNode;
  setCurrentDragNode(node: IPioneerTreeExpandedNode): void;
  isNodeDroppable(dropNode: IPioneerTreeExpandedNode): boolean;
  dropNode(dropzone: IPioneerTreeExpandedNode, dropType: string, droppedSortIndex: number): void;
}

export class PioneerTreeDropService implements IPioneerTreeDropService {
  private currentDragNode: IPioneerTreeExpandedNode | undefined;

  constructor(
    @Inject(PioneerTreeDropRootService) private dropRootService: IPioneerTreeDropRootService,
    @Inject(PioneerTreeDropParentService) private dropParentService: IPioneerTreeDropParentService,
    @Inject(PioneerTreeDropChildService) private dropChildService: IPioneerTreeDropChildService
  ) { }

  getCurrentDragNode(): IPioneerTreeExpandedNode {
    return this.currentDragNode;
  }

  setCurrentDragNode(node: IPioneerTreeExpandedNode): void {
    this.currentDragNode = node;
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
    if (!this.getCurrentDragNode()) {
      return;
    }
    switch (dropType) {
      case 'root':
        this.dropRootService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex);
        break;
      case 'root-end':
        this.dropRootService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex, true);
        break;
      case 'parent':
        this.dropParentService.dropNode(dropzone, this.getCurrentDragNode());
        break;
      case 'child':
        this.dropChildService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex);
        break;
      case 'child-end':
        this.dropChildService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex, true);
        break;
    }

    // remove current drag node tracking
    this.setCurrentDragNode(undefined);
  }
}
