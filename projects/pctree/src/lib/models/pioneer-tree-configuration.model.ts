import { Injectable } from '@angular/core';
/**
 * Global configuration
 */
export interface IPioneerTreeConfiguration {
  /**
   * Name of property in node that houses children nodes
   */
  childPropertyName: string;

  /**
   * Name of property in node that holds sort index
   */
  sortPropertyName: string;

  /**
   * Collapse all node on component load
   */
  collapseAllOnLoad: boolean;
}

@Injectable()
export class PioneerTreeConfiguration implements IPioneerTreeConfiguration {
  childPropertyName = 'children';
  sortPropertyName = 'sort';
  collapseAllOnLoad = false;
}
