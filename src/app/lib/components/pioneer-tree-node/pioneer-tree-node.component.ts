import { Component, Input, TemplateRef } from '@angular/core';


@Component({
    selector: 'pioneer-tree-node',
    template: `
<ng-container [ngTemplateOutlet]="template" [ngOutletContext]="{ $implicit: node }">
</ng-container>
    `,
    entryComponents: [],
    providers: []
})
export class PioneerTreeNodeComponent {
    @Input() node: any;
    @Input() template: any;

    constructor(
    ) { }

    ngOnInit() {
    }
}