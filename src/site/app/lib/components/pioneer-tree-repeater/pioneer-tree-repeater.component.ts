import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component';
import { IPioneerTreeExpandedNode } from '../../models/pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration } from '../../models/pioneer-tree-configuration.model';

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
