import { Component, Input } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../../models/pioneer-tree-expanded-node.model'

@Component({
  selector: '[pioneer-tree-collapse],[pt-collapse]',
  template: `
<span class="pioneer-tree-collapse" (click)="onClicked()">
    <ng-content>
    </ng-content>
</span>
`
})
export class PioneerTreeCollapseComponent {
  @Input() node: IPioneerTreeExpandedNode;

  onClicked() {
    this.node.pioneerTreeNode.pioneerTreeRepeater.collapsed = !this.node.pioneerTreeNode.pioneerTreeRepeater.collapsed;
  }
}