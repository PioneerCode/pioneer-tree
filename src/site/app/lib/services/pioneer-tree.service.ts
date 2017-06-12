import { Injectable } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";

/**
 * Colection of shared service calls
 * Injected into all components and models
 */
export interface IPioneerTreeService {
    /**
     * Internal reference to attribute nodes value
     * 
     * TODO: Consider danage of tracking public
     * 
     */
    nodes: IPioneerTreeExpandedNode[];

    /**
     * Track current selected node UID
     * Set when node is selected
     * 
     * TODO: Consider danage of tracking public
     * 
     */
    currentSlectedNodeId: string
}

@Injectable()
export class PioneerTreeService implements IPioneerTreeService {
    nodes: IPioneerTreeExpandedNode[];
    currentSlectedNodeId: string;
}
