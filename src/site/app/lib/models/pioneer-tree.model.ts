import { Injectable } from '@angular/core';
import { IPioneerTreeExpandedNode } from "./pioneer-tree-expanded-node.model";
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from "./pioneer-tree-configuration.model";
import { PioneerTreeNode } from "./pioneer-tree-node.model";

export interface IPioneerTree {
    /**
     * Track current selected node
     */
    currentDragNode: IPioneerTreeExpandedNode;

    /**
     * Track current node being dragged
     */
    currentSelectedNode: IPioneerTreeExpandedNode;

    /**
     * Internal tracking of nodes
     */
    currentNodes: IPioneerTreeExpandedNode[];

    /**
     * Build internal tree
     */
    buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void;

    /**
     * Check to see if draggable node is droppable on drag-over event
     */
    isNodeDroppable(nodeId: string): boolean;

    /**
     * Drop currentDragNode event
     */
    dropNode(dropzone: IPioneerTreeExpandedNode, isSortDrop: boolean): void;
}

@Injectable()
export class PioneerTree implements IPioneerTree {
    currentNodes: IPioneerTreeExpandedNode[];
    configuration: PioneerTreeConfiguration;
    currentDragNode: IPioneerTreeExpandedNode;
    currentSelectedNode: IPioneerTreeExpandedNode;

    /**
     * Limits the amount of time we need to check if the user has
     * defined a binding field of a sort index.
     */
    private userSortIndexPropertySet: boolean = false;

    buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void {
        this.currentNodes = nodes;

        if (configuration) this.buildConfiguration();

        for (let i = 0; i < this.currentNodes.length; i++) {
            this.currentNodes[i].pioneerTreeNode = new PioneerTreeNode();
            this.setSortIndex(this.currentNodes[i], i);
            if (this.currentNodes[i][this.configuration.childPropertyName]) {
                this.bindNodesToInternalTracking(this.currentNodes[i][this.configuration.childPropertyName], this.currentNodes[i])
            }
        }
    }

    isNodeDroppable(nodeId: string): boolean {
        if (!this.currentDragNode) return false;
        return nodeId !== this.currentDragNode.pioneerTreeNode.getId();
    }

    dropNode(dropzone: IPioneerTreeExpandedNode, isSortDrop: boolean): void {
        this.prune(this.currentNodes, this.currentDragNode.pioneerTreeNode.getId())

        if (isSortDrop) {
            dropzone.pioneerTreeNode.parentNode[this.configuration.childPropertyName].push(this.currentDragNode);
            this.sortCurrentDragNodeOnNewParent(dropzone);
        } else {
            dropzone[this.configuration.childPropertyName].push(this.currentDragNode);
            this.sortCurrentDragNodeOnPosition(dropzone);
        }

        // remove current drag node tracking
        this.currentDragNode = null;
    }

    /**
     * Sort a node dropped on a new parent node
     * @param dropzone Node being dropped on
     */
    private sortCurrentDragNodeOnNewParent(dropzone: IPioneerTreeExpandedNode): void {
        this.currentDragNode.pioneerTreeNode.sortIndex = dropzone[this.configuration.childPropertyName].length;
        if (this.userSortIndexPropertySet) {
            this.currentDragNode[this.configuration.sortPropertyName] = this.currentDragNode.pioneerTreeNode.sortIndex
        }
    }

    /**
     * Sort a node dropped on a...
     *  1) Sort dropzone in same parent node
     *  2) Sort dropzone in new parent node
     * @param dropzone Node being dropped on
     */
    private sortCurrentDragNodeOnPosition(dropzone: IPioneerTreeExpandedNode): void {
        this.currentDragNode.pioneerTreeNode.sortIndex = dropzone[this.configuration.childPropertyName].sort + 1;
        if (this.userSortIndexPropertySet) {
            this.currentDragNode[this.configuration.sortPropertyName] = this.currentDragNode.pioneerTreeNode.sortIndex
        }
    }

    /**
     * Search tree and remove target node
     * @param nodes Tree(s) to traverse
     * @param nodeId Node id to target
     */
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

    /**
     * Bind public config to default config
     */
    private buildConfiguration(): void {
        let config = new PioneerTreeConfiguration();
        this.configuration = Object.assign(config, this.configuration);
    }

    /**
     * Recursively build internal tracking tree
     * @param nodes Collection of nodes
     */
    private bindNodesToInternalTracking(nodes: IPioneerTreeExpandedNode[], parent: IPioneerTreeExpandedNode): void {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode = new PioneerTreeNode();
            nodes[i].pioneerTreeNode.parentNode = parent;
            this.setSortIndex(nodes[i], i);
            if (nodes[i][this.configuration.childPropertyName]) {
                this.bindNodesToInternalTracking(nodes[i][this.configuration.childPropertyName], nodes[i])
            }
        }
    }

    /**
     * Bind sort property through configuration
     * @param node Bindable node
     */
    private setSortIndex(node: IPioneerTreeExpandedNode, index: number): void {
        if (node[this.configuration.sortPropertyName]) {
            this.userSortIndexPropertySet = true;
            node.pioneerTreeNode.sortIndex = node[this.configuration.sortPropertyName];
            return;
        }

        node.pioneerTreeNode.sortIndex = index;
    }
}