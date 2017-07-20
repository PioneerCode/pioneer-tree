import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { PioneerTreeConfiguration, IPioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';

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
  constructor(
    @Inject(PioneerTreeConfiguration) public config: IPioneerTreeConfiguration
  ) { }

  collapseAllExpandThisSetActive(currentNodes: IPioneerTreeExpandedNode[], expandNode: IPioneerTreeExpandedNode, currentSelectedNode: IPioneerTreeExpandedNode): void {
    // Collapse All
    this.expandCollapsedAllNodes(currentNodes, true);
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

  expandCollapsedAllNodes(nodes: IPioneerTreeExpandedNode[], isCollapsed: boolean): void {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].pioneerTreeNode.pioneerTreeRepeater.setCollapsed(isCollapsed);
      if (nodes[i].pioneerTreeNode.getChildNodes()) {
        this.expandCollapsedAllNodes(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
      }
    }
  }

  private recursivelySetCollapsedFlagOfParents(node: IPioneerTreeExpandedNode, isCollapsed: boolean): void {
    if(node.pioneerTreeNode.parentNode){
      node.pioneerTreeNode.parentNode.pioneerTreeNode.setCollapsed(isCollapsed);
      this.recursivelySetCollapsedFlagOfParents(node.pioneerTreeNode.parentNode, isCollapsed)
    }
  }
}
