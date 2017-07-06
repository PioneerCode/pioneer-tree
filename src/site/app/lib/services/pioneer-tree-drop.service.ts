import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeDropService {
  getParentCollection(nodeToDrop: IPioneerTreeExpandedNode, ): IPioneerTreeExpandedNode[];
}


export class PioneerTreeDropService implements IPioneerTreeDropService {
  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
  ) { }

  getParentCollection(nodeToDrop: IPioneerTreeExpandedNode): IPioneerTreeExpandedNode[] {
    return nodeToDrop.pioneerTreeNode.treeRootNodes ?
      nodeToDrop.pioneerTreeNode.treeRootNodes :
      nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName];
  }
}
