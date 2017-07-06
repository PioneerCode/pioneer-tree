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
  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, childEnd?: boolean): void;
}

export class PioneerTreeDropChildService implements IPioneerTreeDropChildService {

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
  ) { }

  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, childEnd: boolean): void {
    const parentCollection = nodeToDrop.pioneerTreeNode.parentNode ?
      nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName] :
      nodeToDrop.pioneerTreeNode.treeRootNodes;

    this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());
    this.dropNodeOntoNewCollection(dropzone, nodeToDrop, droppedSortIndex, childEnd);
    this.adjustCollectionIndexes(dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName]);
    this.adjustCollectionIndexes(parentCollection);
    this.adjustParentTracking(dropzone, nodeToDrop);
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

  private dropNodeOntoNewCollection(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode, droppedSortIndex: number, childEnd: boolean) {
    dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName].splice(this.getAdjustedDropSortIndex(dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName], nodeToDrop, droppedSortIndex, childEnd), 0, nodeToDrop);
  }

  /**
   *
   * @param collection
   * @param nodeToDrop
   * @param droppedSortIndex
   */
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

  /**
   * Re-index sort indexes
   * @param collection Collection to re-index
   */
  private adjustCollectionIndexes(collection: IPioneerTreeExpandedNode[]): void {
    for (let i = 0; i < collection.length; i++) {
      collection[i].pioneerTreeNode.sortIndex = i;
      if (collection[i][this.config.sortPropertyName]) {
        collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
      }
    }
  }

  private adjustParentTracking(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode) {
    if (dropzone.pioneerTreeNode.treeRootNodes) {
      nodeToDrop.pioneerTreeNode.parentNode = null;
      nodeToDrop.pioneerTreeNode.treeRootNodes = dropzone.pioneerTreeNode.treeRootNodes;
      return;
    }
    nodeToDrop.pioneerTreeNode.parentNode = dropzone.pioneerTreeNode.parentNode;
    nodeToDrop.pioneerTreeNode.treeRootNodes = null;
  }
}
