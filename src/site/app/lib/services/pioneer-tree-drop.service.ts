import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropService {
  getParentCollection(nodeToDrop: IPioneerTreeExpandedNode, ): IPioneerTreeExpandedNode[];

  /**
   * Search tree and remove target node
   * @param nodes Tree(s) to traverse
   * @param nodeId Node id to target
   */
  prune(nodes: IPioneerTreeExpandedNode[], nodeId: string): void

  /**
   * Re-index sort indexes
   * @param collection Collection to re-index
   */
  adjustCollectionIndexes(collection: IPioneerTreeExpandedNode[]): void;
}

export class PioneerTreeDropService implements IPioneerTreeDropService {
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
      if (collection[i][this.config.sortPropertyName]) {
        collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
      }
    }
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
