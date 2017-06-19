import { IPioneerTreeNode, PioneerTreeNode } from "./pioneer-tree-node.model"
import { IPioneerTreeRepeater, PioneerTreeRepeater } from "./pioneer-tree-repeater.model"

/**
 * Sets a base type of <any> nodes to allow IntelliSense  
 */
export interface IPioneerTreeExpandedNode {
    pioneerTreeNode: IPioneerTreeNode;
}