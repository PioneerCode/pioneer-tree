import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from "../models/pioneer-tree-configuration.model";

export interface IPioneerTreeDropPositionService {
    /**
     * Sort a node dropped on a...
     *  1) Sort dropzone in same parent node
     *  2) Sort dropzone in new parent node
     * @param dropzone Node being dropped on
     * @param nodeToDrop Node to drop
     */
    dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void;
}

export class PioneerTreeDropPositionService implements IPioneerTreeDropPositionService {

    constructor(
        @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration
    ) { }

    dropNode(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void {
        this.moveNodeOnPositionDrop(dropzone, nodeToDrop);

        nodeToDrop.pioneerTreeNode.sortIndex = dropzone.pioneerTreeNode.sortIndex + 1;
        if (nodeToDrop[this.config.sortPropertyName]) {
            nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex
        }

        this.reorderCollectionOnPositionDrop(dropzone,nodeToDrop);
    }

    /**
     * Move a dropped node into its new home collection while presorting it
     * @param dropzone Target that houses child collection 
     */
    private moveNodeOnPositionDrop(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void {
        if (dropzone.pioneerTreeNode.parentNode) {
            dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName].splice(dropzone.pioneerTreeNode.sortIndex + 1, 0, nodeToDrop);
            return;
        } 

        dropzone[this.config.childPropertyName].splice(dropzone.pioneerTreeNode.sortIndex + 1, 0, nodeToDrop);
    }

    /**
     * Reorder collection on position drop
     * @param dropzone Target that houses child collection 
     */
    private reorderCollectionOnPositionDrop(dropzone: IPioneerTreeExpandedNode, nodeToDrop: IPioneerTreeExpandedNode): void {
        if (dropzone.pioneerTreeNode.parentNode) {
            this.reorderCollectionBasedOnSortIndex(dropzone.pioneerTreeNode.parentNode[this.config.childPropertyName], nodeToDrop);
        } else {
            this.reorderCollectionBasedOnSortIndex(dropzone[this.config.childPropertyName], nodeToDrop);
        }
    }

    /**
     * Reorder a child collection base on a sort index property
     * @param collection Target child collection 
     */
    private reorderCollectionBasedOnSortIndex(collection: IPioneerTreeExpandedNode[], nodeToDrop: IPioneerTreeExpandedNode): void {
        for (var i = 0; i < collection.length; i++) {
            if (i >= nodeToDrop.pioneerTreeNode.sortIndex && nodeToDrop.pioneerTreeNode.getId() != collection[i].pioneerTreeNode.getId()) {
                collection[i].pioneerTreeNode.sortIndex = collection[i].pioneerTreeNode.sortIndex + 1;
                if (nodeToDrop[this.config.sortPropertyName]) {
                    collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex
                }
            }
        }
    }
}