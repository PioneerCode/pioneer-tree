import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropParentService {
  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void;
}

export class PioneerTreeDropParentService implements IPioneerTreeDropParentService {
  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
  ) { }

  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void {
    var parentCollection = nodeToDrop.pioneerTreeNode.parentNode ?
      nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName] :
      nodeToDrop.pioneerTreeNode.treeRootNodes;
    this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());

    if (dropzone[this.config.childPropertyName] === undefined) {
      dropzone[this.config.childPropertyName] = [] as IPioneerTreeExpandedNode[];
    }

    dropzone[this.config.childPropertyName].push(nodeToDrop);
    nodeToDrop.pioneerTreeNode.sortIndex = dropzone[this.config.childPropertyName].length;

    if (nodeToDrop[this.config.sortPropertyName]) {
      nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex;
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
}
