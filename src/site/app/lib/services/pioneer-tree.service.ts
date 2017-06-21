import { Injectable } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../models/pioneer-tree-expanded-node.model";
import { PioneerTreeNode } from "../models/pioneer-tree-node.model";
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from "../models/pioneer-tree-configuration.model"

/**
 * Collection of shared service calls
 * Injected/set into all components and models
 */
export interface IPioneerTreeService {
    // TODO: Consider weight of tracking public properties

    /**
     * Track current selected node
     */
    currentDragNode: IPioneerTreeExpandedNode;

    /**
     * Track current node being dragged
     */
    currentSelectedNode: IPioneerTreeExpandedNode;
    
    /**
     * Track current nodes
     */
    currentNodes: IPioneerTreeExpandedNode[];

    /**
     * Track global configuration
     */
    configuration: IPioneerTreeConfiguration;

    /**
     * Check to see if draggable node is droppable on drag-over event
     */
    isNodeDroppable(nodeId: string): boolean;

    /**
     * Move currentDragNode to new dropped position
     */
    moveCurrentDragNodeToDropzone(dropzone: IPioneerTreeExpandedNode): void;
}

@Injectable()
export class PioneerTreeService implements IPioneerTreeService {
    currentDragNode: IPioneerTreeExpandedNode;
    currentSelectedNode: IPioneerTreeExpandedNode;
    currentNodes: IPioneerTreeExpandedNode[];
    configuration: IPioneerTreeConfiguration = new PioneerTreeConfiguration();

    isNodeDroppable(nodeId: string): boolean {
        if (!this.currentDragNode) return false;
        return nodeId !== this.currentDragNode.pioneerTreeNode.getId();
    }

    moveCurrentDragNodeToDropzone(dropzone: IPioneerTreeExpandedNode): void {
        // locate dropzone index(s)

        // locate drag index()

        // Add drag to dropzone.children

        // Remove drag from original node
    }
}
