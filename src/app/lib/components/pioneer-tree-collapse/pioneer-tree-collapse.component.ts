import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

@Component({
    selector: '[pioneer-tree-collapse]',
    template: `
<div class="pioneer-tree-collapse" (click)="onClicked()">
    <ng-content>
    </ng-content>
</div>
`,
    entryComponents: [],
    providers: []
})
export class PioneerTreeCollapseComponent {
    @Input() node: IPioneerTreeExpandedNode;
    @Output() collapse = new EventEmitter<boolean>();

    onClicked() {
        this.node.pioneerTreeNode.collapsed = !this.node.pioneerTreeNode.collapsed;
        this.collapse.emit();
    }
}