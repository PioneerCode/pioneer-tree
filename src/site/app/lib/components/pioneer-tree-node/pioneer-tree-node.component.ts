import { Component, Input, TemplateRef } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../../models/pioneer-tree-expanded-node.model';
import { PioneerTree } from '../../models/pioneer-tree.model';

@Component({
  selector: '[pioneer-tree-node],[pt-node]',
  template: `
<div class="pioneer-tree-dropzone-root"
    *ngIf="!node.pioneerTreeNode.parentNode"
    pioneer-tree-dropzone
    [dropType]="'root'"
    [node]="node">
</div>
<div class="pioneer-tree-node">
    <div class="pioneer-tree-node-content"
        pioneer-tree-dropzone
        (click)="onClicked()"
        [node]="node"
        [dropType]="'parent'"
        [ngClass]="node.pioneerTreeNode.getContentClasses()">
        <ng-container [ngTemplateOutlet]="nodeTemplate" [ngOutletContext]="{ $implicit: node }">
        </ng-container>
        : {{node.pioneerTreeNode.sortIndex}}
    </div>
    <div class="pioneer-tree-dropzone-sort"
        *ngIf="node.pioneerTreeNode.showDropzonePosition()"
        pioneer-tree-dropzone
        [dropType]="'position'"
        [node]="node">
    </div>
    <div class="pioneer-tree-repeater" [ngClass]="this.node.pioneerTreeNode.pioneerTreeRepeater.getClasses()">
        <ng-container [ngTemplateOutlet]="repeaterTemplate" [ngOutletContext]="{ $implicit: node }">
        </ng-container>
    </div>
</div>
<div class="pioneer-tree-dropzone-end"
    *ngIf="node.pioneerTreeNode.showDropzoneEnd()"
    pioneer-tree-dropzone
    [dropType]="'end'"
    [node]="node">
</div>
    `
})
export class PioneerTreeNodeComponent {
  @Input() node: IPioneerTreeExpandedNode;
  @Input() nodeTemplate: TemplateRef<any>;
  @Input() repeaterTemplate: TemplateRef<any>;

  constructor(
    private pioneerTree: PioneerTree
  ) { }

  onClicked() {
    // Clear previous selected node tracking at that node level
    if (this.pioneerTree.currentSelectedNode) {
      this.pioneerTree.currentSelectedNode.pioneerTreeNode.isCurrentSelectedNode = false;
    }
    // Set this node to current
    this.node.pioneerTreeNode.isCurrentSelectedNode = true;
    this.pioneerTree.currentSelectedNode = this.node;
  }
}
