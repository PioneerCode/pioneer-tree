export interface IPioneerTree {
    setTree(nodes: any): void;
}

export class PioneerTree implements IPioneerTree {
    private nodes = [] as any;

    /**
     *
     */
    constructor() {
    }

    setTree(nodes: any): void {
        this.nodes = nodes;
        this.buildTree;
        console.log('in')
    }

    private buildTree(): void {
        //.map((c, index) => new TreeNode(c, this, this.treeModel, index));
    }
}