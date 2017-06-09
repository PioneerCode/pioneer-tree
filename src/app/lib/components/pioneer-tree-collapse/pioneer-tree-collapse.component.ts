import { Component, Output, EventEmitter } from '@angular/core';


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
    temp ="";

    @Output() collapse = new EventEmitter<boolean>();

    onClicked(){
        alert(this.temp);
        this.collapse.emit();
    }
}