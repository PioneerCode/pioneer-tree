import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: '[pioneer-tree-collapse]',
    template: `
<span class="pioneer-tree-node">
    <ng-content>
    </ng-content>
</span>
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