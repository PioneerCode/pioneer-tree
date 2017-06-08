import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'pioneer-tree-collapse',
    template: `
<span (click)="onClicked()">
    <ng-content>
    </ng-content>
</span>
`,
    entryComponents: [],
    providers: []
})
export class PioneerTreeCollapseComponent {
    @Output() onCollapse = new EventEmitter<boolean>();

    constructor(
    ) { }

    ngOnInit() {
    }

    onClicked(){
        this.onCollapse.emit();
    }
}