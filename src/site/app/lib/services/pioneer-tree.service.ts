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
     * On node clicke, we need to flip current selected
     * to unselected before appying to new node
     */
    flipAllSelectedToFalse(): void;
}

export class PioneerTreeService implements IPioneerTreeService {
    nodes: IPioneerTreeExpandedNode[];

    flipAllSelectedToFalse(): void {
        throw new Error("Method not implemented.");
    }
}
