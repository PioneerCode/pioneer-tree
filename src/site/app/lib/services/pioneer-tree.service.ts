import { Injectable } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";

/**
 * Collection of shared service calls
 * Injected into all components and models
 */
export interface IPioneerTreeService {
    /**
     * Track current selected node UID
     * Set when node is selected
     * 
     * TODO: Consider damage of tracking public
     * 
     */
    currentSelectedNodeId: string
}

@Injectable()
export class PioneerTreeService implements IPioneerTreeService {
    currentSelectedNodeId: string;
}
