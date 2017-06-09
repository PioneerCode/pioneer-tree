import { IPioneerTreeNode } from "./pioneer-tree-node.model"

/**
 * Sets a base type of <any> nodes to allow intellisense 
 */
export interface IPioneerTreeExpandedNode {
    pioneerTreeNode: IPioneerTreeNode;
    pioneerTreeRepeater: IPioneerTreeNode;
}