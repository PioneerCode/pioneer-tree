import { Injectable } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";
import { PioneerTreeNode } from "../models/pioneer-tree-node.model";

/**
 * Collection of shared service calls
 * Injected/set into all components and models
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
     * Track current nodes
     * TODO: Consider weight of tracking public
     */
    currentNodes: IPioneerTreeExpandedNode[];

    /**
     * Check to see if draggable node is droppable on drag-over event
     */
    isNodeDroppable(nodeId: string): boolean;
}

@Injectable()
export class PioneerTreeService implements IPioneerTreeService {
    currentDragNode: IPioneerTreeExpandedNode;
    currentSelectedNode: IPioneerTreeExpandedNode;
    currentNodes: IPioneerTreeExpandedNode[];

    isNodeDroppable(nodeId: string): boolean {
        if (!this.currentDragNode) return false;
        return nodeId !== this.currentDragNode.pioneerTreeNode.getId();
    }

    test(){
        this.currentNodes.push({
            pioneerTreeNode: new PioneerTreeNode(this)
        });
    }
}
