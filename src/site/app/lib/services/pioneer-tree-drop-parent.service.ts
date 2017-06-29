import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from "../models/pioneer-tree-configuration.model";

export interface IPioneerTreeDropParentService {
    dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode): void;
}

export class PioneerTreeDropParentService implements IPioneerTreeDropParentService {

    constructor(
        @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
    ) { }

    dropNode(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode): void {
        collection.push(nodeToDrop);
        nodeToDrop.pioneerTreeNode.sortIndex = collection.length;

        if (nodeToDrop[this.config.sortPropertyName]) {
            nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex
        }
    }
}