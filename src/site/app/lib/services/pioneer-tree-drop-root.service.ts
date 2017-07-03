import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropRootService {
  dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number): void;
}

export class PioneerTreeDropRootService implements IPioneerTreeDropRootService {

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
  ) { }

  dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number): void {
    this.adjustDropSortIndex(collection, nodeToDrop, droppedSortIndex);
    this.switchNodes(collection, droppedSortIndex, nodeToDrop.pioneerTreeNode.sortIndex);
  }

  /**
   *
   * @param collection
   * @param newLocation
   * @param originalLocation
   */
  private switchNodes(collection: IPioneerTreeExpandedNode[], newLocation: number, originalLocation: number): void {
    // Don't do anything if it is the same location
    if (newLocation === originalLocation) {
      return;
    }

    // Swap locations
    const temp = collection[originalLocation];
    collection[originalLocation] = collection[newLocation];
    collection[newLocation] = temp;

    // Adjust indexes
    collection[newLocation].pioneerTreeNode.sortIndex = newLocation;
    if (collection[newLocation][this.config.sortPropertyName]) {
      collection[newLocation][this.config.sortPropertyName] = collection[newLocation].pioneerTreeNode.sortIndex;
    }

    collection[originalLocation].pioneerTreeNode.sortIndex = originalLocation;
    if (collection[originalLocation][this.config.sortPropertyName]) {
      collection[originalLocation][this.config.sortPropertyName] = collection[originalLocation].pioneerTreeNode.sortIndex;
    }
  }

  /**
   *
   * @param collection
   * @param nodeToDrop
   * @param droppedSortIndex
   */
  private adjustDropSortIndex(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number) {
    // dropped in end dropzone
    if (droppedSortIndex == collection.length - 1) {
      ++droppedSortIndex;
      return;
    }

    // moving down the tree
    if (droppedSortIndex > nodeToDrop.pioneerTreeNode.sortIndex) {
      --droppedSortIndex;
      return;
    }
  }
}
