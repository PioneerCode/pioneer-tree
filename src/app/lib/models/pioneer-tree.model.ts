import { PioneerTreeNode, IPioneerTreeNode } from "./pioneer-tree-node.model"

export interface IPioneerTree {
    setTree(nodes: any): void;
}

export class PioneerTree implements IPioneerTree {
    private nodes = [] as any;
    private tree = [] as IPioneerTreeNode[];

    constructor() {
    }

    setTree(nodes: any): void {
        this.nodes = nodes;
        this.buildTree();
    }

    private buildTree(): void {
        if (!this.nodes) return;
        this.tree = this.nodes.map((x: any) => {
            return new PioneerTreeNode(x)
        });
    }
}