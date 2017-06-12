import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

@Component({
    selector: '[pioneer-tree-collapse],[pt-collapse]',
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
        this.node.pioneerTreeRepeater.collapsed = !this.node.pioneerTreeRepeater.collapsed;
        this.collapse.emit();
    }
}