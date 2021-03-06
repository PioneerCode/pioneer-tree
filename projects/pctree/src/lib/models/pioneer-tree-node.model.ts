﻿import { IPioneerTreeUidService } from '../services/pioneer-tree-uid.service';
import { IPioneerTreeRepeater, PioneerTreeRepeater } from './pioneer-tree-repeater.model';
import { IPioneerTreeExpandedNode } from './pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration } from './pioneer-tree-configuration.model';
import { IPioneerTreeDropService } from '../services/pioneer-tree-drop.service';

export interface IPioneerTreeNode {
  /**
   * A repeater lives inside a node
   * this is the node id
   */
  pioneerTreeRepeater: IPioneerTreeRepeater;

  /**
   * Current internal sort index
   */
  sortIndex: number;

  /**
   * Is this node currently selected
   */
  isCurrentSelectedNode: boolean;

  /**
   * Tracking access to parent node
   */
  parentNode: IPioneerTreeExpandedNode;

  /**
   * Tracking for tree root collection
   * Set when there is no parent node
   */
  treeRootNodes: IPioneerTreeExpandedNode[];

  /**
  * Tracking access to current node
  */
  currentNode: IPioneerTreeExpandedNode;

  /**
   * Tracking access to previous node in current
   * node collection this node lives in
   * n - 1
   */
  previousNode: IPioneerTreeExpandedNode;

  /**
   * User => default configuration
   */
  config: IPioneerTreeConfiguration;

  /**
   * Current length of the collection this node lives in
   */
  nodesInCollection: number;

  /**
   * Get UID of node
   * Generated by model at init
   */
  getId(): string;

  /**
   * Get collection of content classes to set on ngClass
   */
  getContentClasses(): string[];

  /**
   * Get child objects
   * TODO: any?
   */
  getChildNodes(): any;

  /**
   * Is this node currently selected
   */
  isSelected(): boolean;

  /**
   * Is this node currently collapsed
   */
  isCollapsed(): boolean;

  /**
   * Collapse or expand individual node
   */
  setCollapsed(isCollapsed: boolean): void;

  /**
   * Can we show a dropzone of the type position
   * 0 - is collapsed
   * 0 - is not collapsed && has !children
   * 1 - is not collapsed && has children.length > 0
   */
  showDropzonePosition(): boolean;

  /**
   * Can we show a dropzone of the type position
   * 1 - last item in list
   */
  showDropzoneEnd(): boolean;
}

export class PioneerTreeNode implements IPioneerTreeNode {

  pioneerTreeRepeater: IPioneerTreeRepeater;
  sortIndex: number;
  isCurrentSelectedNode = false;
  parentNode: IPioneerTreeExpandedNode;
  treeRootNodes: IPioneerTreeExpandedNode[];
  currentNode: IPioneerTreeExpandedNode;
  previousNode: IPioneerTreeExpandedNode;
  config: IPioneerTreeConfiguration;
  nodesInCollection: number;

  private uid: string;

  constructor(
    private uidService: IPioneerTreeUidService,
    private treeDropService: IPioneerTreeDropService
  ) {
    this.uid = this.uidService.getUid();
    this.pioneerTreeRepeater = new PioneerTreeRepeater(this.uidService);
  }

  getId(): string {
    return this.uid;
  }

  getContentClasses(): string[] {
    const classes = [] as string[];

    if (this.isSelected()) {
      classes.push('pt-node-selected');
    }

    return classes;
  }

  getChildNodes(): any {
    const paths = this.config.childPropertyName.split('.');
    let current = this.currentNode;

    for (let i = 0; i < paths.length; ++i) {
      if (current[paths[i]] === undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }

  isSelected(): boolean {
    if (!this.isCurrentSelectedNode) {
      return false;
    }

    return this.getId() === this.getId();
  }

  isCollapsed(): boolean {
    return this.pioneerTreeRepeater.isCollapsed();
  }

  setCollapsed(isCollapsed: boolean): void {
    this.pioneerTreeRepeater.setCollapsed(isCollapsed);
  }

  showDropzonePosition(): boolean {
    if (this.isCollapsed()) {
      return false;
    }

    if (!this.getChildNodes()) {
      return false;
    }

    return true;
  }

  showDropzoneEnd(): boolean {
    // child
    if (!this.currentNode.pioneerTreeNode.treeRootNodes) {
      if (this.currentNode.pioneerTreeNode.getId() === this.getLastIdInParentNodeChildCollection()) {
        return true;
      }
      return false;
    }

    // root
    if (this.currentNode.pioneerTreeNode.sortIndex === this.currentNode.pioneerTreeNode.treeRootNodes.length - 1) {
      return true;
    }

    return false;
  }

  private getLastIdInParentNodeChildCollection(): string {
    const a = this.currentNode.pioneerTreeNode.parentNode.pioneerTreeNode.getChildNodes();
    return a[a.length - 1].pioneerTreeNode.getId();
  }
}
