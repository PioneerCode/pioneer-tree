import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'
@Component({
    selector: '[pioneer-tree-node]',
    template: `
<div class="pioneer-tree-node">
    <ng-container [ngTemplateOutlet]="nodeTemplate" [ngOutletContext]="{ $implicit: node }">
    </ng-container>
</div>
    `
})
export class PioneerTreeNodeComponent {
    @Input() node: any;
    @Input() nodeTemplate: any;
    @ViewChild(PioneerTreeCollapseComponent) collapseComponent: PioneerTreeCollapseComponent;

    ngAfterViewInit() {
        // this.collapseComponent.temp = "My"
    }
}