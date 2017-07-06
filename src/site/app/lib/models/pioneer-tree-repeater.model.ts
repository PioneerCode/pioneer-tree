﻿import { IPioneerTreeUidService } from '../services/pioneer-tree-uid.service';

/**
 * Represents a repeated nested node element
 * Example :
 * <ul>
 *     <li>
 *         <ul><!-- This is a repeater --></ul>
 *     <li>
 * </ul>
 */
export interface IPioneerTreeRepeater {
  /**
   * Flipped on pioneer-tree-collapse click
   */
  collapsed: boolean;

  /**
   * Get UID of repeater
   * Generated by model at init
   */
  getId(): string;

  /**
   * Get collection of style to set on ngStyle
   */
  getStyles(): IPioneerTreeRepeaterStyles;

  /**
   * Get collection of classes to set on ngClass
   */
  getClasses(): string[];
}

/**
 * Track dynamic styling for a repeater object
 */
export interface IPioneerTreeRepeaterStyles {
  display: string;
}

export class PioneerTreeRepeater implements IPioneerTreeRepeater {
  collapsed = false;
  private uid: string;

  constructor(private uidService: IPioneerTreeUidService) {
    this.uid = this.uidService.getUid();
  }

  getStyles(): IPioneerTreeRepeaterStyles {
    return {
      display: this.collapsed ? 'none' : 'block'
    } as IPioneerTreeRepeaterStyles;
  }

  getClasses(): string[] {
    const classes = [] as string[];

    if (this.collapsed) {
      classes.push('pt-repeater-collapsed');
    }

    return classes;
  }

  getId(): string {
    return this.uid;
  }
}
