import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: '[pioneer-tree-collapse]',
    template: `
<div class="pioneer-tree-node">
    <ng-content>
    </ng-content>
</div>
`,
    entryComponents: [],
    providers: []
})
export class PioneerTreeCollapseComponent {
    @Output() collapse = new EventEmitter<boolean>();

    onClicked(){
        this.collapse.emit();
    }
}