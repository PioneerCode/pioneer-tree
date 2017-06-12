import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

import { PioneerTreeService } from "../../services/pioneer-tree.service"

@Component({
    selector: '[pioneer-tree-collapse],[pt-collapse]',
    template: `
<div class="pioneer-tree-collapse" (click)="onClicked()">
    <ng-content>
    </ng-content>
</div>
`,
    entryComponents: [],
    providers: [PioneerTreeService]
})
export class PioneerTreeCollapseComponent {
    @Input() node: IPioneerTreeExpandedNode;
    @Output() collapse = new EventEmitter<boolean>();

    onClicked() {
        this.node.pioneerTreeRepeater.collapsed = !this.node.pioneerTreeRepeater.collapsed;
        this.collapse.emit();
    }
}