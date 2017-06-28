import { Component, Input, ViewChild, TemplateRef, ContentChild, ElementRef, Renderer2 } from '@angular/core';

import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTreeNode } from "../../models/pioneer-tree-node.model"
import { PioneerTreeRepeater } from "../../models/pioneer-tree-repeater.model"
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from "../../models/pioneer-tree-configuration.model"

import { PioneerTree, IPioneerTree } from "../../models/pioneer-tree.model";

@Component({
  selector: '[pioneer-tree],[pt]',
  template: `
  <ng-content></ng-content>
  `
})
export class PioneerTreeComponent {
  private isRoot: boolean = false;
  
  @Input() nodes: IPioneerTreeExpandedNode[];
  @Input() configuration: IPioneerTreeConfiguration;

  constructor(
    private pioneerTree: PioneerTree,
    private elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree')
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree-root')
  }

  /**
   * TODO: Keep an eye on this to understand the update life cycle.
   *  If argument model is updated, do we loose all tracking because we are
   *  resetting nodes from the map
   * @param changes 
   */
  ngOnChanges(changes: any) {
    if (!this.nodes) return;
    this.pioneerTree.buildTree(this.nodes, this.configuration);
  }
}