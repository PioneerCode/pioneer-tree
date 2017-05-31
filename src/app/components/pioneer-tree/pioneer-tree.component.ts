import { Component, Input } from '@angular/core';
import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'

@Component({
  selector: 'pioneer-tree',
  templateUrl: './pioneer-tree.html',
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