import { Component, Input, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component';
import { IPioneerTreeExpandedNode } from '../../models/pioneer-tree-expanded-node.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pioneer-tree-repeater],[pt-repeater]',
  template: `
  <ng-content></ng-content>
  `,
  entryComponents: [
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
  ]
})
export class PioneerTreeRepeaterComponent implements AfterContentInit {
  @Input() nodes: IPioneerTreeExpandedNode[];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree');
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree-repeater');
  }
}
