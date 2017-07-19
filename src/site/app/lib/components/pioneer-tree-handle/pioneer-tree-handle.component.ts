import { Component, Input, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../../models/pioneer-tree-expanded-node.model';
import { PioneerTree } from '../../models/pioneer-tree.model';

/**
 * Adds drag and drop functionality to pioneer-tree-node child elements
 */
@Component({
  selector: '[pioneer-tree-handle],[pt-handle]',
  template: `
<span class="pioneer-tree-handle">
    <ng-content>
    </ng-content>
</span>
    `
})
export class PioneerTreeHandleComponent {
  @Input() node: IPioneerTreeExpandedNode;

  constructor(
    private pioneerTree: PioneerTree,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  /**
   * Enable HTML5 draggable on entire component
   */
  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  /**
   * Act on dragstart event
   */
  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    this.pioneerTree.setCurrentDragNode(this.node);
    this.renderer.addClass(this.elementRef.nativeElement, 'pt-handle-drag-start');
  }

  /**
   * Act on drag end event
   */
  @HostListener('dragend')
  onDragEnd(event: DragEvent) {
    this.renderer.removeClass(this.elementRef.nativeElement, 'pt-handle-drag-start');
  }
}
