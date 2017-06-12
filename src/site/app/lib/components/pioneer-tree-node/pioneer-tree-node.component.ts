import { Component, Input, TemplateRef } from '@angular/core';
import { PioneerTreeComponent } from '../pioneer-tree/pioneer-tree.component'
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

import { PioneerTreeService } from "../../services/pioneer-tree.service"

@Component({
    selector: '[pioneer-tree-node],[pt-node]',
    template: `
<div class="pioneer-tree-node">
    <ng-container [ngTemplateOutlet]="nodeTemplate" [ngOutletContext]="{ $implicit: node }">
    </ng-container>
    <ng-container [ngTemplateOutlet]="treeTemplate" [ngOutletContext]="{ $implicit: children }">
    </ng-container>
</div>
    `,
    providers: [PioneerTreeService]
})
export class PioneerTreeNodeComponent {
    @Input() node: IPioneerTreeExpandedNode;
    @Input() children = [] as IPioneerTreeExpandedNode[];
    @Input() nodeTemplate: TemplateRef<any>;
    @Input() treeTemplate: TemplateRef<any>;
}