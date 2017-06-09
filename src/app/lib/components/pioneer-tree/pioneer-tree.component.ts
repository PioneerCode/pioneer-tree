import { Component, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';

import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTree } from '../../models/pioneer-tree.model'

import { PioneerTreeNode, IPioneerTreeNode } from "../../models/pioneer-tree-node.model"

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

  constructor(private pioneerTree: PioneerTree) {
  }

  ngOnChanges(changes: any) {
    if (!this.nodes) return;

    const newNodes = this.nodes.map((x: any) => {
      x.pioneerTreeNode =  new PioneerTreeNode()
      return x;
    });
    this.nodes = newNodes;
    // this.pioneerTree.setTree(this.nodes);
  }
}