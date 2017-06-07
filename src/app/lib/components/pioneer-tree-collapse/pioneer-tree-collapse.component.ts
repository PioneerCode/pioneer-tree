import { Component, Input, TemplateRef } from '@angular/core';


@Component({
    selector: 'pioneer-tree-collapse',
    template: `
<span (click)="onclick()">
    <ng-content>
    </ng-content>
</span>
`,
    entryComponents: [],
    providers: []
})
export class PioneerTreeCollapseComponent {
    @Input() node: any;
    @Input() template: any;

    constructor(
    ) { }

    ngOnInit() {
    }

    onclick(){
        alert('In');
    }
}