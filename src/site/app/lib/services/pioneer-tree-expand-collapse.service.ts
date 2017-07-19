import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';

export interface IPioneerTreeExpandCollapseService {

  /**
   * Collapse or Expand all nodes
   */
  expandCollapsedAllNodes(nodes: IPioneerTreeExpandedNode[], isCollapsed: boolean): void;

  /**
   * Collapse all nodes
   * Expand this node and set it as active
   */
  collapseAllExpandThisSetActive(currentNodes: IPioneerTreeExpandedNode[], expandNode: IPioneerTreeExpandedNode, currentSelectedNode: IPioneerTreeExpandedNode): void;
}

export class PioneerTreeExpandCollapseService implements IPioneerTreeExpandCollapseService {
  collapseAllExpandThisSetActive(currentNodes: IPioneerTreeExpandedNode[], expandNode: IPioneerTreeExpandedNode, currentSelectedNode: IPioneerTreeExpandedNode): void {
    this.expandCollapsedAllNodes(currentNodes, true);
    if (currentSelectedNode) {
      currentSelectedNode.pioneerTreeNode.isCurrentSelectedNode = false;
    }
    expandNode.pioneerTreeNode.setCollapsed(false);
    expandNode.pioneerTreeNode.isCurrentSelectedNode = true;
    currentSelectedNode = expandNode;
  }

  expandCollapsedAllNodes(nodes: IPioneerTreeExpandedNode[], isCollapsed: boolean): void {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].pioneerTreeNode.pioneerTreeRepeater.setCollapsed(isCollapsed);
      if (nodes[i].pioneerTreeNode.getChildNodes()) {
        this.recursivelySetCollapsedFlag(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
      }
    }
  }

  private recursivelySetCollapsedFlag(nodes: IPioneerTreeExpandedNode[], isCollapsed: boolean): void {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].pioneerTreeNode.pioneerTreeRepeater.setCollapsed(isCollapsed);
      if (nodes[i].pioneerTreeNode.getChildNodes()) {
        this.recursivelySetCollapsedFlag(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
      }
    }
  }
}
