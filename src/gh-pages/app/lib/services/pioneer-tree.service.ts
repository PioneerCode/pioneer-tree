/**
 * Shared by components that want to write messages to the message.component
 */
export class PioneerTreeService {
    private tree: any;

    getTree() {
        return this.tree
    }
    
    setTree(tree: any) {
        this.tree = tree;
    }
}
