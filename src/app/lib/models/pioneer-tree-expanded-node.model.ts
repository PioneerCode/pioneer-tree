import { IPioneerTreeNode } from "./pioneer-tree-node.model"
import { IPioneerTreeRepeater } from "./pioneer-tree-repeater.model"

/**
 * Sets a base type of <any> nodes to allow intellisense 
 */
export interface IPioneerTreeExpandedNode {
    pioneerTreeNode: IPioneerTreeNode;
    pioneerTreeRepeater: IPioneerTreeRepeater;
}