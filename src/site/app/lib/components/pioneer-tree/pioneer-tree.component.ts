import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../../models/pioneer-tree-expanded-node.model';
import { IPioneerTreeConfiguration } from '../../models/pioneer-tree-configuration.model';
import { PioneerTree } from '../../models/pioneer-tree.model';

@Component({
  selector: '[pioneer-tree],[pt]',
  template: `
  <ng-content></ng-content>
  `
})
export class PioneerTreeComponent {
  @Input() nodes: IPioneerTreeExpandedNode[];
  @Input() configuration: IPioneerTreeConfiguration;

  constructor(
    private pioneerTree: PioneerTree,
    private elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree');
    this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree-root');
  }

  /**
   * TODO: Keep an eye on this to understand the update life cycle.
   *  If argument model is updated, do we loose all tracking because we are
   *  resetting nodes from the map
   * @param changes
   */
  ngOnChanges(changes: any) {
    if (!this.nodes) {
      return;
    }
    this.pioneerTree.buildTree(this.nodes, this.configuration);
  }
}
