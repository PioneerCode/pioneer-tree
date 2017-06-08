import { Component, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';

import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTree } from '../../models/pioneer-tree.model'


@Component({
  selector: '[pioneer-tree]',
  template: `
  <ng-content></ng-content>
  `,
  entryComponents: [
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
  ],
  providers: [
    PioneerTree
  ]
})
export class PioneerTreeComponent {
  @Input() nodes: any[];

  /**
   *
   */
  constructor(private pioneerTree: PioneerTree) {

  }

  ngOnChanges(changes: any) {
    console.log(changes);
    this.pioneerTree.setTree(this.nodes);
    // changes.prop contains the old and the new value...
  }
}