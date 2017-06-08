import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'pioneer-tree-node',
    template: `
<ng-container [ngTemplateOutlet]="nodeTemplate" [ngOutletContext]="{ $implicit: node }">
</ng-container>
    `,
    entryComponents: [],
    providers: []
})
export class PioneerTreeNodeComponent {
    @Input() node: any;
    @Input() nodeTemplate: any;

    constructor() { }

    ngOnInit() {
    }
}