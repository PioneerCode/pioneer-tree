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
    //configuration: IPioneerTreeConfiguration;

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
    configuration: PioneerTreeConfiguration;

    isNodeDroppable(nodeId: string): boolean {
        if (!this.currentDragNode) return false;
        return nodeId !== this.currentDragNode.pioneerTreeNode.getId();
    }

    moveCurrentDragNodeToDropzone(dropzone: IPioneerTreeExpandedNode): void {
        dropzone[this.configuration.childPropertyName].push(this.currentDragNode);
        this.prune(this.currentNodes, this.currentDragNode.pioneerTreeNode.getId())
        this.currentDragNode = null;
    }

    private prune(nodes: IPioneerTreeExpandedNode[], nodeId: string) {
        for (var i = 0; i < nodes.length; ++i) {
            var obj: IPioneerTreeExpandedNode = nodes[i];
            if (obj.pioneerTreeNode.getId() === nodeId) {
                // splice out 1 element starting at position i
                nodes.splice(i, 1);
                return true;
            }
            if (obj[this.configuration.childPropertyName]) {
                if (this.prune(obj[this.configuration.childPropertyName], nodeId)) {
                    if (obj[this.configuration.childPropertyName].length === 0) {
                        // delete children property when empty
                        delete obj[this.configuration.childPropertyName];

                        // or, to delete this parent altogether
                        // as a result of it having no more children
                        // do this instead
                        nodes.splice(i, 1);
                    }
                    return true;
                }
            }
        }
    }
}
