import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: '[pioneer-tree-node]',
    template: `
<div class="pioneer-tree-node">
    <ng-container [ngTemplateOutlet]="nodeTemplate" [ngOutletContext]="{ $implicit: node }">
    </ng-container>
</div>
    `,
    entryComponents: [],
    providers: []
})
export class PioneerTreeNodeComponent {
    @Input() node: any;
    @Input() nodeTemplate: any;

    onCollapse() {
    }
}