import { Injectable, Inject } from '@angular/core';
import { IPioneerTreeExpandedNode } from './pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from './pioneer-tree-configuration.model';
import { IPioneerTreeDropParentService, PioneerTreeDropParentService } from '../services/pioneer-tree-drop-parent.service';
import { PioneerTreeDropChildService, IPioneerTreeDropChildService } from '../services/pioneer-tree-drop-child.service';
import { IPioneerTreeDropRootService, PioneerTreeDropRootService } from '../services/pioneer-tree-drop-root.service';
import { IPioneerTreeUidService, PioneerTreeUidService } from '../services/pioneer-tree-uid.service';
import { IPioneerTreeBuildService, PioneerTreeBuildService } from '../services/pioneer-tree-build.service';
import { IPioneerTreeExpandCollapseService, PioneerTreeExpandCollapseService } from '../services/pioneer-tree-expand-collapse.service';
import { IPioneerTreeDropService, PioneerTreeDropService } from '../services/pioneer-tree-drop.service';

export interface IPioneerTree {
  /**
   * Track current node being dragged
   */
  currentSelectedNode: IPioneerTreeExpandedNode;

  /**
   * Internal tracking of nodes
   */
  currentNodes: IPioneerTreeExpandedNode[];

  /**
   * Build internal tree
   */
  buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void;

  /**
   * Drop currentDragNode event
   */
  dropNode(dropzone: IPioneerTreeExpandedNode, dropType: string, droppedSortIndex: number): void;

  /**
   * Expand all nodes
   */
  expandAllNodes(): void;

  /**
   * Collapse all nodes
   */
  expandAllNodes(): void;

  /**
   * Collapse all nodes
   * Expand this node and set it as active
   */
  collapseAllExpandThisSetActive(node: IPioneerTreeExpandedNode): void;

  getCurrentDragNode(): IPioneerTreeExpandedNode;
  setCurrentDragNode(node: IPioneerTreeExpandedNode): void;
  isNodeDroppable(dropNode: IPioneerTreeExpandedNode): boolean;
}

@Injectable()
export class PioneerTree implements IPioneerTree {
  currentNodes: IPioneerTreeExpandedNode[];
  currentSelectedNode: IPioneerTreeExpandedNode;

  constructor(
    @Inject(PioneerTreeConfiguration) private config: IPioneerTreeConfiguration,
    @Inject(PioneerTreeBuildService) private buildService: IPioneerTreeBuildService,
    @Inject(PioneerTreeDropRootService) private dropRootService: IPioneerTreeDropRootService,
    @Inject(PioneerTreeDropParentService) private dropParentService: IPioneerTreeDropParentService,
    @Inject(PioneerTreeDropChildService) private dropChildService: IPioneerTreeDropChildService,
    @Inject(PioneerTreeUidService) private uidService: IPioneerTreeUidService,
    @Inject(PioneerTreeExpandCollapseService) private expandCollapseService: IPioneerTreeExpandCollapseService,
    @Inject(PioneerTreeDropService) private treeDropService: IPioneerTreeDropService
  ) { }

  buildTree(nodes: IPioneerTreeExpandedNode[], configuration?: IPioneerTreeConfiguration): void {
    this.currentNodes = nodes;
    this.buildService.buildTree(this.currentNodes, configuration);
  }

  getCurrentDragNode(): IPioneerTreeExpandedNode {
    return this.treeDropService.getCurrentDragNode();
  }

  setCurrentDragNode(node: IPioneerTreeExpandedNode): void {
    this.treeDropService.setCurrentDragNode(node);
  }

  dropNode(dropzone: IPioneerTreeExpandedNode, dropType: string, droppedSortIndex: number): void {
    this.treeDropService.dropNode(dropzone, dropType, droppedSortIndex);
  }

  isNodeDroppable(dropNode: IPioneerTreeExpandedNode): boolean {
    return this.treeDropService.isNodeDroppable(dropNode);
  }

  expandAllNodes(): void {
    this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, false);
  }

  collapseAllNodes(): void {
    this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, true);
  }

  collapseAllExpandThisSetActive(node: IPioneerTreeExpandedNode): void {
    this.expandCollapseService.collapseAllExpandThisSetActive(this.currentNodes, node, this.currentSelectedNode);
  }
}
