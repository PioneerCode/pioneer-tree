﻿import { IPioneerTreeRepeater, PioneerTreeRepeater } from './pioneer-tree-repeater.model';
import { IPioneerTreeExpandedNode } from './pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration } from './pioneer-tree-configuration.model';

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
   * Get UID of node
   * Generated by model at init
   */
  getId(): string;

  /**
   * Get collection of content classes to set on ngClass
   */
  getContentClasses(): string[];

  /**
   * Is this node currently selected
   */
  isSelected(): boolean;

  /**
   * Is this node currently collapsed
   */
  isCollapsed(): boolean;

  /**
   * Can we show a dropzone of the type position
   * 0 - is collapsed
   * 0 - is not collapsed && has !children
   * 1 - is not collapsed && has children.length > 0
   */
  showDropzonePosition(): boolean;
}

export class PioneerTreeNode implements IPioneerTreeNode {
  pioneerTreeRepeater: IPioneerTreeRepeater;
  sortIndex: number;
  isCurrentSelectedNode = false;
  parentNode: IPioneerTreeExpandedNode;
  currentNode: IPioneerTreeExpandedNode;
  previousNode: IPioneerTreeExpandedNode;
  config: IPioneerTreeConfiguration;

  private uid: string;

  constructor() {
    this.generateUid();
    this.pioneerTreeRepeater = new PioneerTreeRepeater();
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

  isSelected(): boolean {
    if (!this.isCurrentSelectedNode) {
      return false;
    }

    return this.getId() === this.getId();
  }

  isCollapsed(): boolean {
    return this.pioneerTreeRepeater.collapsed;
  }

  showDropzonePosition(): boolean {
    if (this.isCollapsed()) {
      return false;
    };

    if (this.currentNode[this.config.childPropertyName]) {
      return false;
    };

    return true;
  }

  private generateUid(): void {
    this.uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
