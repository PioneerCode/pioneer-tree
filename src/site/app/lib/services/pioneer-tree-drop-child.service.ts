import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropChildService {
  /**
   * Sort a node dropped on a...
   *  1) Sort dropzone in same parent node
   *  2) Sort dropzone in new parent node
   * @param dropzone Node being dropped on
   * @param nodeToDrop Node to drop
   * @param droppedSortIndex Sort index of the node being dropped on
   */
  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number): void;
}

export class PioneerTreeDropChildService implements IPioneerTreeDropChildService {

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
  ) { }

  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number): void {
    var parentCollection = nodeToDrop.pioneerTreeNode.parentNode ?
                            nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName] :
                            nodeToDrop.pioneerTreeNode.treeRootNodes;
    this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId())

    dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName].splice(droppedSortIndex, 0, nodeToDrop);
    //this.switchNodes(dropzone[this.config.childPropertyName], droppedSortIndex, 1)


    // this.moveNodeOnChildDrop(dropzone, nodeToDrop);

    // nodeToDrop.pioneerTreeNode.sortIndex = dropzone.pioneerTreeNode.sortIndex + 1;
    // if (nodeToDrop[this.config.sortPropertyName]) {
    //   nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex;
    // }

    // this.reorderCollectionOnChildDrop(dropzone, nodeToDrop);
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

  private switchNodes(collection: IPioneerTreeExpandedNode[], newLocation: number, originalLocation: number): void {
    // Don't do anything if it is the same location
    // if (newLocation === originalLocation) {
    //   return;
    // }

    // Swap locations
    // const temp = collection[originalLocation];
    // collection[originalLocation] = collection[newLocation];
    // collection[newLocation] = temp;

    //collection.splice(newLocation - 1, 0, nodeToDrop);

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

  // /**
  //  * Move a dropped node into its new home collection while presorting it
  //  * @param dropzone Target that houses child collection
  //  */
  // private moveNodeOnChildDrop(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void {
  //   if (dropzone.pioneerTreeNode.parentNode) {
  //     dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName].splice(dropzone.pioneerTreeNode.sortIndex + 1, 0, nodeToDrop);
  //     return;
  //   }

  //   dropzone[this.config.childPropertyName].splice(dropzone.pioneerTreeNode.sortIndex + 1, 0, nodeToDrop);
  // }

  // /**
  //  * Reorder collection on Child drop
  //  * @param dropzone Target that houses child collection
  //  */
  // private reorderCollectionOnChildDrop(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void {
  //   if (dropzone.pioneerTreeNode.parentNode) {
  //     this.reorderCollectionBasedOnSortIndex(dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName], nodeToDrop);
  //   } else {
  //     this.reorderCollectionBasedOnSortIndex(dropzone[this.config.childPropertyName], nodeToDrop);
  //   }
  // }

  // /**
  //  * Reorder a child collection base on a sort index property
  //  * @param collection Target child collection
  //  */
  // private reorderCollectionBasedOnSortIndex(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode): void {
  //   for (let i = 0; i < collection.length; i++) {
  //     if (i >= nodeToDrop.pioneerTreeNode.sortIndex && nodeToDrop.pioneerTreeNode.getId() !== collection[i].pioneerTreeNode.getId()) {
  //       collection[i].pioneerTreeNode.sortIndex = collection[i].pioneerTreeNode.sortIndex + 1;
  //       if (nodeToDrop[this.config.sortPropertyName]) {
  //         collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
  //       }
  //     }
  //   }
  // }
}
