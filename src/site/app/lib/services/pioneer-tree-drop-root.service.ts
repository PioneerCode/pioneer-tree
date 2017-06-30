import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropRootService {
  dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, sortIndex?: number): void;
}

export class PioneerTreeDropRootService implements IPioneerTreeDropRootService {

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
  ) { }

  dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, sortIndex: number): void {
    this.moveNodeOnPositionDrop(collection, nodeToDrop, sortIndex);

    nodeToDrop.pioneerTreeNode.sortIndex = sortIndex;
    if (nodeToDrop[this.config.sortPropertyName]) {
      nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex;
    }

    this.reorderCollectionBasedOnSortIndex(collection, nodeToDrop);
  }

  /**
   * Move a dropped node into its new home collection while presorting it
   * @param dropzone Target that houses child collection 
   */
  private moveNodeOnPositionDrop(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, sortIndex: number): void {
    if (sortIndex === 0) {
      collection.unshift(nodeToDrop);
      return;
    }
    collection.splice(sortIndex - 1, 0, nodeToDrop);
  }

  /**
   * Reorder collection on position drop
   * @param dropzone Target that houses child collection 
   */
  // private reorderCollectionOnPositionDrop(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode): void {
  //     if (collection.pioneerTreeNode.parentNode) {
  //         this.reorderCollectionBasedOnSortIndex(collection.pioneerTreeNode.parentNode[this.config.childPropertyName], nodeToDrop);
  //     } else {
  //         this.reorderCollectionBasedOnSortIndex(collection[this.config.childPropertyName], nodeToDrop);
  //     }
  // }

  /**
   * Reorder a child collection base on a sort index property
   * @param collection Target child collection 
   */
  private reorderCollectionBasedOnSortIndex(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode): void {
    for (let i = 0; i < collection.length; i++) {
      if (i >= nodeToDrop.pioneerTreeNode.sortIndex && nodeToDrop.pioneerTreeNode.getId() !== collection[i].pioneerTreeNode.getId()) {
        collection[i].pioneerTreeNode.sortIndex = collection[i].pioneerTreeNode.sortIndex + 1;
        if (nodeToDrop[this.config.sortPropertyName]) {
          collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
        }
      }
    }
  }
}