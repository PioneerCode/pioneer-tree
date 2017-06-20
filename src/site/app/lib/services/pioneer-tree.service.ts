import { Injectable } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";

/**
 * Collection of shared service calls
 * Injected into all components and models
 */
export interface IPioneerTreeService {
    /**
     * Track current selected node UID
     * TODO: Consider damage of tracking public
     */
    currentSelectedNodeId: string

    /**
     * Track current node being dragged
     * TODO: Consider damage of tracking public
     */
    currentDragNodeId: string;

    /**
     * Check to see if draggable node is droppable on drag-over event
     */
    isNodeDroppable(nodeId: string): boolean;
}

@Injectable()
export class PioneerTreeService implements IPioneerTreeService {
    currentDragNodeId: string;
    currentSelectedNodeId: string;

    isNodeDroppable(nodeId: string): boolean {
        if(nodeId === this.currentDragNodeId) {
            return false;
        }
        return true;
    }
}
