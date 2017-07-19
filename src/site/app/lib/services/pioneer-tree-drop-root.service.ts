import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';
import { IPioneerTreeDropBaseService, PioneerTreeDropBaseService } from './pioneer-tree-drop-base.service';

export interface IPioneerTreeDropRootService extends IPioneerTreeDropBaseService {
  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, rootEnd?: boolean): void;
}

export class PioneerTreeDropRootService extends PioneerTreeDropBaseService implements IPioneerTreeDropRootService {

  constructor(
    @Inject(PioneerTreeConfiguration) public config: IPioneerTreeConfiguration
  ) {
    super(config);
  }

  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, rootEnd: boolean): void {
    const parentCollection = this.getParentCollection(nodeToDrop);
    this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());
    this.dropNodeOntoNewCollection(dropzone, nodeToDrop, droppedSortIndex, rootEnd);
    this.adjustCollectionIndexes(dropzone.pioneerTreeNode.treeRootNodes);
    this.adjustCollectionIndexes(parentCollection);
    this.adjustParentTracking(dropzone, nodeToDrop, parentCollection);
    this.adjustMetaTracking(nodeToDrop, parentCollection);
  }

  private dropNodeOntoNewCollection(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, rootEnd: boolean) {
    droppedSortIndex = this.getAdjustedDropSortIndex(dropzone.pioneerTreeNode.treeRootNodes, nodeToDrop, droppedSortIndex, rootEnd);
    dropzone.pioneerTreeNode.treeRootNodes.splice(droppedSortIndex, 0, nodeToDrop);
  }

  private getAdjustedDropSortIndex(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, rootEnd: boolean) {
    // Child to root drops
    if (!nodeToDrop.pioneerTreeNode.treeRootNodes) {
      return droppedSortIndex;
    }

    // dropped in root-end of last index
    if (droppedSortIndex === collection.length && rootEnd) {
      return ++droppedSortIndex;
    }

    // dropped in root of last index
    // Not moving up the tree
    if (droppedSortIndex === collection.length - 1 && !rootEnd && droppedSortIndex >= nodeToDrop.pioneerTreeNode.sortIndex) {
      return --droppedSortIndex;
    }

    // moving down the tree
    if (droppedSortIndex > nodeToDrop.pioneerTreeNode.sortIndex) {
      return --droppedSortIndex;
    }

    return droppedSortIndex;
  }

  private adjustParentTracking(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, parentCollection: IPioneerTreeExpandedNode[]) {
    nodeToDrop.pioneerTreeNode.parentNode = {} as IPioneerTreeExpandedNode;
    nodeToDrop.pioneerTreeNode.treeRootNodes = dropzone.pioneerTreeNode.treeRootNodes;
  }
}
