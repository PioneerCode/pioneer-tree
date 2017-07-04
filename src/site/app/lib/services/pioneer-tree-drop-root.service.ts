import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropRootService {
  /**
   *
   */
  dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, rootEnd?: boolean): void;
}

export class PioneerTreeDropRootService implements IPioneerTreeDropRootService {

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
  ) { }

  dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, rootEnd: boolean = false): void {
    this.prune(collection, nodeToDrop.pioneerTreeNode.getId())
    collection.splice(this.getAdjustedDropSortIndex(collection, nodeToDrop, droppedSortIndex, rootEnd), 0, nodeToDrop);
    this.adjustIndexes(collection);
  }

  /**
   * Re-index sort indexes
   * @param collection Collection to re-index
   */
  private adjustIndexes(collection: IPioneerTreeExpandedNode[]): void {
    for (let i = 0; i < collection.length; i++) {
      collection[i].pioneerTreeNode.sortIndex = i;
      if (collection[i][this.config.sortPropertyName]) {
        collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
      }
    }
  }

  /**
   * Search tree and remove target node
   * @param nodes Tree(s) to traverse
   * @param nodeId Node id to target
   */
  private prune(nodes: IPioneerTreeExpandedNode[], nodeId: string) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].pioneerTreeNode.getId() == nodeId) {
        nodes.splice(i, 1);
        return;
      }
    }
  }

  /**
   *
   * @param collection
   * @param nodeToDrop
   * @param droppedSortIndex
   */
  private getAdjustedDropSortIndex(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, rootEnd: boolean) {
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
}
