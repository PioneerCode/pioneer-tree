import { Component, Input, TemplateRef, ElementRef, ContentChild, ViewChild, ContentChildren, ViewChildren, QueryList, } from '@angular/core';
import { PioneerTreeComponent } from '../pioneer-tree/pioneer-tree.component'
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

@Component({
    selector: '[pioneer-tree-node],[pt-node]',
    template: `
<div class="pioneer-tree-node">
    <ng-container [ngTemplateOutlet]="nodeTemplate" [ngOutletContext]="{ $implicit: node }">
    </ng-container>
    <ng-container [ngTemplateOutlet]="treeTemplate" [ngOutletContext]="{ $implicit: children }">
    </ng-container>
</div>
    `
})
export class PioneerTreeNodeComponent {
    @Input() node: IPioneerTreeExpandedNode;
    @Input() children = [] as IPioneerTreeExpandedNode[];
    @Input() nodeTemplate: TemplateRef<any>;
    @Input() treeTemplate: TemplateRef<any>;

}