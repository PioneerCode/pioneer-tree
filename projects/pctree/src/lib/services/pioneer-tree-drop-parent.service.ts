import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';
import { IPioneerTreeDropBaseService, PioneerTreeDropBaseService } from './pioneer-tree-drop-base.service';

export interface IPioneerTreeDropParentService extends IPioneerTreeDropBaseService {
  dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void;
}

export class PioneerTreeDropParentService extends PioneerTreeDropBaseService implements IPioneerTreeDropParentService {
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
    this.adjustMetaTracking(nodeToDrop, parentCollection);
    this.adjustParentTracking(dropzone, nodeToDrop, parentCollection);
  }

  private dropNodeOntoNewCollection(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode) {
    if (dropzone[this.config.childPropertyName] === undefined) {
      dropzone[this.config.childPropertyName] = [] as IPioneerTreeExpandedNode[];
    }

    dropzone[this.config.childPropertyName].push(nodeToDrop);
  }

  private adjustIndexes(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode) {
    nodeToDrop.pioneerTreeNode.sortIndex = dropzone[this.config.childPropertyName].length - 1;
    if (nodeToDrop[this.config.sortPropertyName]) {
      nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex;
    }
  }

  private adjustParentTracking(
    dropzone: IPioneerTreeExpandedNode,
    nodeToDrop: IPioneerTreeExpandedNode,
    parentCollection: IPioneerTreeExpandedNode[]
  ) {
    nodeToDrop.pioneerTreeNode.parentNode = dropzone;
    nodeToDrop.pioneerTreeNode.treeRootNodes = [] as IPioneerTreeExpandedNode[];
  }
}
