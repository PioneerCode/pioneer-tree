import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';

export interface IPioneerTreeExpandCollapseService {

  /**
   * Collapse or Expand all nodes
   */
  expandCollapsedAllNodes(nodes: IPioneerTreeExpandedNode[], isCollapsed: boolean): void;
}

export class PioneerTreeExpandCollapseService implements IPioneerTreeExpandCollapseService {
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
