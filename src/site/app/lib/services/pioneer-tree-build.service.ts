import { Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from '../models/pioneer-tree-configuration.model';
import { PioneerTreeNode } from '../models/pioneer-tree-node.model';
import { IPioneerTreeUidService, PioneerTreeUidService } from '../services/pioneer-tree-uid.service';
import { IPioneerTreeExpandCollapseService, PioneerTreeExpandCollapseService } from '../services/pioneer-tree-expand-collapse.service';
export interface IPioneerTreeBuildService {
  buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void;
}

export class PioneerTreeBuildService implements IPioneerTreeBuildService {

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration,
    @Inject(PioneerTreeUidService) private uidService: IPioneerTreeUidService,
    @Inject(PioneerTreeExpandCollapseService) private expandCollapseService: IPioneerTreeExpandCollapseService
  ) { }

  buildTree(nodes: any[], configuration?: any): void {
    this.buildConfiguration(configuration);
    this.buildExpandedNode(nodes);
    if (this.config.collapseAllOnLoad) {
      this.expandCollapseService.expandCollapsedAllNodes(nodes, true);
    }
  }

  /**
 * Bind public config to default config
 */
  private buildConfiguration(configuration?: IPioneerTreeConfiguration): void {
    let config = new PioneerTreeConfiguration();
    this.config = Object.assign(config, configuration);
  }

  /**
   * Bind IPioneerTreeExpandedNodes
   */
  private buildExpandedNode(nodes: any[]): void {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].pioneerTreeNode = new PioneerTreeNode(this.uidService);
      nodes[i].pioneerTreeNode.config = this.config;
      nodes[i].pioneerTreeNode.currentNode = nodes[i];
      nodes[i].pioneerTreeNode.nodesInCollection = nodes.length;
      nodes[i].pioneerTreeNode.treeRootNodes = nodes;
      this.setSortIndex(nodes[i], i);
      if (nodes[i].pioneerTreeNode.getChildNodes()) {
        this.bindNodesToInternalTracking(nodes[i].pioneerTreeNode.getChildNodes(), nodes[i]);
      }
    }
  }

  /**
   * Recursively build internal tracking tree
   * @param nodes Collection of nodes
   */
  private bindNodesToInternalTracking(nodes: IPioneerTreeExpandedNode[], parent: IPioneerTreeExpandedNode): void {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].pioneerTreeNode = new PioneerTreeNode(this.uidService);
      nodes[i].pioneerTreeNode.config = this.config;
      nodes[i].pioneerTreeNode.parentNode = parent;
      nodes[i].pioneerTreeNode.previousNode = nodes[i - 1];
      nodes[i].pioneerTreeNode.currentNode = nodes[i];
      nodes[i].pioneerTreeNode.nodesInCollection = nodes.length;
      this.setSortIndex(nodes[i], i);
      nodes[i].pioneerTreeNode.getChildNodes();
      if (nodes[i].pioneerTreeNode.getChildNodes()) {
        this.bindNodesToInternalTracking(nodes[i].pioneerTreeNode.getChildNodes(), nodes[i]);
      }
    }
  }

  /**
   * Bind sort property through configuration
   * @param node Bindable node
   */
  private setSortIndex(node: IPioneerTreeExpandedNode, index: number): void {
    if (node[this.config.sortPropertyName]) {
      node.pioneerTreeNode.sortIndex = node[this.config.sortPropertyName];
      return;
    }

    node.pioneerTreeNode.sortIndex = index;
  }
}
