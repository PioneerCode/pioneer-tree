import { Component, Input, ViewChild, TemplateRef, ContentChild, ElementRef, Renderer2 } from '@angular/core';

import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTreeNode } from "../../models/pioneer-tree-node.model"
import { PioneerTreeRepeater } from "../../models/pioneer-tree-repeater.model"
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"
import { IPioneerTreeConfiguration, PioneerTreeConfiguration } from "../../models/pioneer-tree-configuration.model"

import { PioneerTreeService, IPioneerTreeService } from "../../services/pioneer-tree.service"

@Component({
  selector: '[pioneer-tree-repeater],[pt-repeater]',
  template: `
  <ng-content></ng-content>
  `,
  entryComponents: [
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
  ]
})
export class PioneerTreeRepeaterComponent {
  private isRoot: boolean = false;
  
  @Input() nodes: IPioneerTreeExpandedNode[];
  @Input() configuration: IPioneerTreeConfiguration;

  constructor(
    private pioneerTreeService: PioneerTreeService,
    private elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree')
  }

  /**
   * TODO: Keep an eye on this to understand the in-memory values 
   *  coming from this.nodes and this.pioneerTreeService.nodes
   * 
   * TODO: Keep an eye on this to understand the update life cycle.
   *  If argument model is updated, do we loose all tracking because we are
   *  resetting nodes from the map
   * @param changes 
   */
  ngOnChanges(changes: any) {
    if (!this.nodes) return;
    this.nodes = this.nodes.map((x: IPioneerTreeExpandedNode) => {
      x.pioneerTreeNode = new PioneerTreeNode(this.pioneerTreeService);
      return x;
    });
  }
}