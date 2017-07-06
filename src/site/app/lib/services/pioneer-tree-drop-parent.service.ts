import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';
import { IPioneerTreeDropService, PioneerTreeDropService } from './pioneer-tree-drop.service';

export interface IPioneerTreeDropParentService extends IPioneerTreeDropService  {
  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void;
}

export class PioneerTreeDropParentService extends PioneerTreeDropService implements IPioneerTreeDropParentService {
  constructor(
    @Inject(PioneerTreeConfiguration) public config: IPioneerTreeConfiguration
  ) {
    super(config);
  }

  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void {
    const parentCollection = this.getParentCollection(nodeToDrop);
    this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());
    this.dropNodeOntoNewCollection(dropzone, nodeToDrop);
    this.adjustIndexes(dropzone, nodeToDrop);
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

  private dropNodeOntoNewCollection(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode) {
    if (dropzone[this.config.childPropertyName] === undefined) {
      dropzone[this.config.childPropertyName] = [] as IPioneerTreeExpandedNode[];
    }

    dropzone[this.config.childPropertyName].push(nodeToDrop);
  }

  private adjustCollectionIndexes(collection: IPioneerTreeExpandedNode[]): void {
    for (let i = 0; i < collection.length; i++) {
      collection[i].pioneerTreeNode.sortIndex = i;
      if (collection[i][this.config.sortPropertyName]) {
        collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
      }
    }
  }

  private adjustIndexes(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode) {
    nodeToDrop.pioneerTreeNode.sortIndex = dropzone[this.config.childPropertyName].length - 1;
    if (nodeToDrop[this.config.sortPropertyName]) {
      nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex;
    }
  }

  private adjustParentTracking(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode) {
    nodeToDrop.pioneerTreeNode.parentNode = dropzone;
    nodeToDrop.pioneerTreeNode.treeRootNodes = [] as IPioneerTreeExpandedNode[];
  }
}
