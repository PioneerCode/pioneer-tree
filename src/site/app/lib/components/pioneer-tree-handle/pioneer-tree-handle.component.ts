/**
 * Adds drag and drop functionality to pioneer-tree-node child elements
 */
import { Component, Input, HostListener, HostBinding } from '@angular/core';
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
export class PioneerTreeHandleComponent {
    @Input() node: IPioneerTreeExpandedNode;

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
    onDragStart(event: Event) {
        console.log('drag started ' + event);
    }

    /**
     * Act on drag end event
     */
    @HostListener('dragend')
    onDragEnd() {
        alert('drag ended');
    }
}