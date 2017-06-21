import { PioneerTreeService, IPioneerTreeService } from "../services/pioneer-tree.service"
import { IPioneerTreeRepeater, PioneerTreeRepeater } from "./pioneer-tree-repeater.model"

export interface IPioneerTreeNode {
    /**
     * Get UID of node
     * Generated by model at init
     */
    getId(): string;

    /**
     * Get collection of content classes to set on ngClass
     */
    getContentClasses(): string[];

    /**
     * A repeater lives inside a node
     * this is the node id
     */
    pioneerTreeRepeater: IPioneerTreeRepeater;

    /**
     * Is this node currently selected
     */
    isSelected(): boolean;

    /**
     * Is this node currently collapsed
     */
    isCollapsed(): boolean
}

export class PioneerTreeNode implements IPioneerTreeNode {

    pioneerTreeRepeater: IPioneerTreeRepeater;

    private uid: string;

    constructor(private pioneerTreeService: IPioneerTreeService) {
        this.generateUid();
        this.pioneerTreeRepeater = new PioneerTreeRepeater()
    }

    getId(): string {
        return this.uid
    }

    getContentClasses(): string[] {
        const classes = [] as string[]

        if (this.isSelected()) {
            classes.push('pt-node-selected')
        }

        return classes;
    }

    isSelected(): boolean {
        return this.pioneerTreeService.currentSelectedNode === this.getId();
    }

    isCollapsed(): boolean {
        return this.pioneerTreeRepeater.collapsed;
    }

    private generateUid(): void {
        this.uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}