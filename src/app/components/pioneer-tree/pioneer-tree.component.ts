import { Component, Input } from '@angular/core';
import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'

@Component({
  selector: 'pioneer-tree',
  template: `
<ul>
	<ng-template ngFor let-node [ngForOf]="nodes">
    <pioneer-tree-node [node]="node"></pioneer-tree-node>
	</ng-template>
</ul>
  `,
  entryComponents: [PioneerTreeNodeComponent],
  providers: []
})
export class PioneerTreeComponent {
  @Input() nodes: any[];

  constructor(
  ) { }

  ngOnInit() {
  }
}