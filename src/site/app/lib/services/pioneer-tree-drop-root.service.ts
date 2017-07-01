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
    // Are we move up or down the tree
    if (sortIndex > nodeToDrop.pioneerTreeNode.sortIndex) {
      // down
      --sortIndex;
    }

    this.switchNodes(collection, sortIndex, nodeToDrop.pioneerTreeNode.sortIndex);
  }

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
}
