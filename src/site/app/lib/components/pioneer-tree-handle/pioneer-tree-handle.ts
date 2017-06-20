/**
 * Adds drag and drop functionality to pioneer-tree-node child elements
 */
import { Component, Input, HostListener } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

@Component({
    selector: '[pioneer-tree-handle],[pt-handle]',
    template: `
<span class="pioneer-tree-handle">
    <ng-content>
    </ng-content>
</span>
    `
})
export class PioneerTreeNodeComponent {
    @Input() node: IPioneerTreeExpandedNode;

  @HostListener('dragstart', ['$event']) 
  onDragStart(event: Event) {
      console.log('drag started');
  }

  @HostListener('dragend')
  onDragEnd() {
    alert('drag ended');
  }
}