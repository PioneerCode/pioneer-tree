import { Injectable } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";

/**
 * Collection of shared service calls
 * Injected into all components and models
 */
export interface IPioneerTreeService {
    /**
     * Track current selected node
     * TODO: Consider weight of tracking public
     */
    currentDragNode: IPioneerTreeExpandedNode;

    /**
     * Track current node being dragged
     * TODO: Consider weight of tracking public
     */
    currentSelectedNode: IPioneerTreeExpandedNode;

    /**
     * Check to see if draggable node is droppable on drag-over event
     */
    isNodeDroppable(nodeId: string): boolean;
}

@Injectable()
export class PioneerTreeService implements IPioneerTreeService {
    currentDragNode: IPioneerTreeExpandedNode;
    currentSelectedNode: IPioneerTreeExpandedNode;

    isNodeDroppable(nodeId: string): boolean {
        if (!this.currentDragNode) return false;
        return nodeId !== this.currentDragNode.pioneerTreeNode.getId();
    }
}
