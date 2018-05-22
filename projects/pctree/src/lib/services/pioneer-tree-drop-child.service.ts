import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';
import { IPioneerTreeDropBaseService, PioneerTreeDropBaseService } from './pioneer-tree-drop-base.service';

export interface IPioneerTreeDropChildService extends IPioneerTreeDropBaseService {
  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, childEnd?: boolean): void;
}

export class PioneerTreeDropChildService extends PioneerTreeDropBaseService implements IPioneerTreeDropChildService {

  constructor(
    @Inject(PioneerTreeConfiguration) public config: IPioneerTreeConfiguration
  ) {
    super(config);
  }

  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, childEnd: boolean): void {
    const parentCollection = this.getParentCollection(nodeToDrop);
    this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());
    this.dropNodeOntoNewCollection(dropzone, nodeToDrop, droppedSortIndex, childEnd);
    this.adjustCollectionIndexes(dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName]);
    this.adjustCollectionIndexes(parentCollection);
    this.adjustMetaTracking(nodeToDrop, parentCollection);
    this.adjustParentTracking(dropzone, nodeToDrop, parentCollection);
  }

  private dropNodeOntoNewCollection(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, childEnd: boolean) {
    dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName].splice(this.getAdjustedDropSortIndex(dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName], nodeToDrop, droppedSortIndex, childEnd), 0, nodeToDrop);
  }

  private getAdjustedDropSortIndex(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, childEnd: boolean) {
    // dropped in root-end of last index
    if (droppedSortIndex === collection.length && childEnd) {
      return ++droppedSortIndex;
    }

    // dropped in root of last index
    // Not moving up the tree
    if (droppedSortIndex === collection.length && !childEnd && droppedSortIndex >= nodeToDrop.pioneerTreeNode.sortIndex) {
      return --droppedSortIndex;
    }

    // moving down the tree
    if (droppedSortIndex > nodeToDrop.pioneerTreeNode.sortIndex) {
      return --droppedSortIndex;
    }

    return droppedSortIndex;
  }

  private adjustParentTracking(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, parentCollection: IPioneerTreeExpandedNode[]) {
    if (dropzone.pioneerTreeNode.treeRootNodes) {
      nodeToDrop.pioneerTreeNode.parentNode = {} as IPioneerTreeExpandedNode;
      nodeToDrop.pioneerTreeNode.treeRootNodes = dropzone.pioneerTreeNode.treeRootNodes;
      return;
    }
    nodeToDrop.pioneerTreeNode.parentNode = dropzone.pioneerTreeNode.parentNode;
    nodeToDrop.pioneerTreeNode.treeRootNodes = [] as IPioneerTreeExpandedNode[];
  }
}
