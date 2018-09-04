import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

export interface IPioneerTreeExpandCollapseService {
  /**
   * Collapse or Expand all nodes
   */
  expandCollapsedAllNodes(
    nodes: IPioneerTreeExpandedNode[],
    isCollapsed: boolean,
    deactivate?: boolean,
    collapseDepth?: number,
    trackingDepth?: number): void;

  /**
   * Collapse all nodes
   * Expand this node and set it as active
   */
  collapseAllExpandThisSetActive(
    currentNodes: IPioneerTreeExpandedNode[],
    expandNode: IPioneerTreeExpandedNode,
    currentSelectedNode: IPioneerTreeExpandedNode
  ): void;
}

export class PioneerTreeExpandCollapseService implements IPioneerTreeExpandCollapseService {
  constructor(
    @Inject(PioneerTreeConfiguration) public config: IPioneerTreeConfiguration
  ) { }

  collapseAllExpandThisSetActive(
    currentNodes: IPioneerTreeExpandedNode[],
    expandNode: IPioneerTreeExpandedNode,
    currentSelectedNode: IPioneerTreeExpandedNode
  ): void {
    // Collapse All
    this.expandCollapsedAllNodes(currentNodes, true, true);
    // Flip selected
    if (currentSelectedNode) {
      currentSelectedNode.pioneerTreeNode.isCurrentSelectedNode = false;
    }
    // Expand new
    expandNode.pioneerTreeNode.setCollapsed(false);
    // Open parents
    this.recursivelySetCollapsedFlagOfParents(expandNode, false);
    // Set as active
    expandNode.pioneerTreeNode.isCurrentSelectedNode = true;
    currentSelectedNode = expandNode;
  }

  /**
   * Expand or Collapse nodes
   * @param nodes current tree of nodes
   * @param isCollapsed If true we are collapesing the tree
   * @param deactivate If true we are removing classes that indicate any give node is selected
   * @param collapseDepth If set, and isCollapsed is true, we only collapse to given depth in the tree
   * @param trackingDepth Track tree depth
   */
  expandCollapsedAllNodes(
    nodes: IPioneerTreeExpandedNode[],
    isCollapsed: boolean,
    deactivate?: boolean,
    collapseDepth?: number,
    trackingDepth = 0
  ): void {
    trackingDepth = trackingDepth + 1;
    for (let i = 0; i < nodes.length; i++) {
      // If we are short-circuting and we are at a depth less then the tracking depth,
      // collapse current node depth
      if (!collapseDepth || collapseDepth < trackingDepth) {
        nodes[i].pioneerTreeNode.pioneerTreeRepeater.setCollapsed(isCollapsed);
      }

      if (deactivate) {
        nodes[i].pioneerTreeNode.isCurrentSelectedNode = false;
      }

      if (nodes[i].pioneerTreeNode.getChildNodes()) {
        this.expandCollapsedAllNodes(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed, deactivate, depth, trackingDepth);
      }
    }
  }

  private recursivelySetCollapsedFlagOfParents(node: IPioneerTreeExpandedNode, isCollapsed: boolean): void {
    if (node.pioneerTreeNode.parentNode) {
      node.pioneerTreeNode.parentNode.pioneerTreeNode.setCollapsed(isCollapsed);
      this.recursivelySetCollapsedFlagOfParents(node.pioneerTreeNode.parentNode, isCollapsed);
    }
  }
}
