import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropBaseService {
  getParentCollection(nodeToDrop: IPioneerTreeExpandedNode): IPioneerTreeExpandedNode[];

  /**
   * Search tree and remove target node
   * @param nodes Tree(s) to traverse
   * @param nodeId Node id to target
   */
  prune(nodes: IPioneerTreeExpandedNode[], nodeId: string): void;

  /**
   * Re-index sort indexes
   * @param collection Collection to re-index
   */
  adjustCollectionIndexes(collection: IPioneerTreeExpandedNode[]): void;

  /**
   *  Re-assign meta after drop
   */
  adjustMetaTracking(nodeToDrop: IPioneerTreeExpandedNode, parentCollection: IPioneerTreeExpandedNode[]): void;
}

export class PioneerTreeDropBaseService implements IPioneerTreeDropBaseService {
  constructor(
    public config: IPioneerTreeConfiguration
  ) { }

  getParentCollection(nodeToDrop: IPioneerTreeExpandedNode): IPioneerTreeExpandedNode[] {
    return nodeToDrop.pioneerTreeNode.treeRootNodes && nodeToDrop.pioneerTreeNode.treeRootNodes.length > 0 ?
      nodeToDrop.pioneerTreeNode.treeRootNodes :
      nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName];
  }

  adjustCollectionIndexes(collection: IPioneerTreeExpandedNode[]): void {
    for (let i = 0; i < collection.length; i++) {
      collection[i].pioneerTreeNode.sortIndex = i;
      if (collection[i][this.config.sortPropertyName] !== undefined && collection[i][this.config.sortPropertyName] !== null) {
        collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
      }
    }
  }

  adjustMetaTracking(nodeToDrop: IPioneerTreeExpandedNode, parentCollection: IPioneerTreeExpandedNode[]): void {
    nodeToDrop.pioneerTreeNode.previousNode = nodeToDrop.pioneerTreeNode.sortIndex === 0 ?
      {} as IPioneerTreeExpandedNode :
      parentCollection[nodeToDrop.pioneerTreeNode.sortIndex - 1];
    nodeToDrop.pioneerTreeNode.nodesInCollection = parentCollection.length;
  }

  prune(nodes: IPioneerTreeExpandedNode[], nodeId: string): void {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].pioneerTreeNode.getId() === nodeId) {
        nodes.splice(i, 1);
        return;
      }
    }
  }
}
