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
    const parentCollection = nodeToDrop.pioneerTreeNode.parentNode ?
      nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName] :
      nodeToDrop.pioneerTreeNode.treeRootNodes;

    // Adjust if an end dropzone.
    if (droppedSortIndex === dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName].length - 1) {
      ++droppedSortIndex;
    }

    this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());
    dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName].splice(droppedSortIndex, 0, nodeToDrop);
    this.adjustIndexes(dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName]);
  }

  /**
   * Search tree and remove target node
   * @param nodes Tree(s) to traverse
   * @param nodeId Node id to target
   */
  private prune(nodes: IPioneerTreeExpandedNode[], nodeId: string) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].pioneerTreeNode.getId() === nodeId) {
        nodes.splice(i, 1);
        return;
      }
    }
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

  private adjustParentTracking(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode) {

  }
}
