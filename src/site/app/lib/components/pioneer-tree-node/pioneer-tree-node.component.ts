import { Component, Input, TemplateRef } from '@angular/core';
import { PioneerTreeComponent } from '../pioneer-tree/pioneer-tree.component'
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

import { PioneerTreeService } from "../../services/pioneer-tree.service"

@Component({
    selector: '[pioneer-tree-node],[pt-node]',
    template: `
<div class="pioneer-tree-node" 
    (click)="onClicked()" 
    [ngClass]="{
        'pt-node-selected': this.treeService.currentSlectedNodeId === this.node.pioneerTreeNode.getId()
    }">
    <ng-container [ngTemplateOutlet]="nodeTemplate" [ngOutletContext]="{ $implicit: node }">
    </ng-container>
</div>
    `
})
export class PioneerTreeNodeComponent {
    @Input() node: IPioneerTreeExpandedNode;
    @Input() nodeTemplate: TemplateRef<any>;
    @Input() repeaterTemplate: TemplateRef<any>;

    constructor(private treeService: PioneerTreeService) { }

    onClicked() {
        this.treeService.currentSlectedNodeId = this.node.pioneerTreeNode.getId();
    }
}