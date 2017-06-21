import { Component, Input, ViewChild, TemplateRef, ContentChild, ElementRef, Renderer2 } from '@angular/core';

import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTreeNode } from "../../models/pioneer-tree-node.model"
import { PioneerTreeRepeater } from "../../models/pioneer-tree-repeater.model"
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

import { PioneerTreeService, IPioneerTreeService } from "../../services/pioneer-tree.service"

@Component({
  selector: '[pioneer-tree],[pioneer-tree-repeater],[pt],[pt-repeater]',
  template: `
  <ng-content></ng-content>
  `,
  entryComponents: [
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
  ]
})
export class PioneerTreeComponent {
  @Input() nodes: IPioneerTreeExpandedNode[];

  constructor(
    private pioneerTreeService: PioneerTreeService,
     private elementRef: ElementRef,
     private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.setClasses();
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

  /**
   * Identify root & set pioneer-tree-root
   * Set pioneer-tree for all
   */
  private setClasses() {
    let isRoot = true;
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree')
    for (let i = 0; i < this.elementRef.nativeElement.parentNode.classList.length; i++) {
      const parentClass = this.elementRef.nativeElement.parentNode.classList[i];
      if (parentClass === 'pioneer-tree-repeater' || parentClass === 'pt-repeater' || parentClass === 'pt' || parentClass === 'pioneer-tree') {
        this.elementRef.nativeElement.className += ' pioneer-tree'
        return;
      }
    }
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree')
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree-root')
  }
}