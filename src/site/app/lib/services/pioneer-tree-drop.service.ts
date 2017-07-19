import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';

export interface IPioneerTreeDropService {
  getCurrentDragNode(): IPioneerTreeExpandedNode;
  setCurrentDragNode(node: IPioneerTreeExpandedNode): void;
  isNodeDroppable(dropNode: IPioneerTreeExpandedNode): boolean;
}

export class PioneerTreeDropService implements IPioneerTreeDropService {
  private currentDragNode: IPioneerTreeExpandedNode | undefined;

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
}
