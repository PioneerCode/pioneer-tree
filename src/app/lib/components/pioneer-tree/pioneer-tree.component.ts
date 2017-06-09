import { Component, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';

import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTreeNode, IPioneerTreeNode } from "../../models/pioneer-tree-node.model"
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

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
  ]
})
export class PioneerTreeComponent {
  @Input() nodes: IPioneerTreeExpandedNode[];

  ngOnChanges(changes: any) {
    if (!this.nodes) return;

    this.nodes = this.nodes.map((x: IPioneerTreeExpandedNode) => {
      x.pioneerTreeNode = new PioneerTreeNode()
      return x;
    });
  }
}