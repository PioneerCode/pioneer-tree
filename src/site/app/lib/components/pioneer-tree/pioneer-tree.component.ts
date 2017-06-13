import { Component, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';

import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTreeNode } from "../../models/pioneer-tree-node.model"
import { PioneerTreeRepeater } from "../../models/pioneer-tree-repeater.model"
import { IPioneerTreeExpandedNode } from "../../models/pioneer-tree-expanded-node.model"

import { PioneerTreeService, IPioneerTreeService } from "../../services/pioneer-tree.service"

@Component({
  selector: '[pioneer-tree],[pioneer-tree-repeater],[pt],[pt-repeater]',
  template: `
  <ng-content></ng-content>
  `,
  entryComponents: [
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
  ],
  providers: [PioneerTreeService]
})
export class PioneerTreeComponent {
  @Input() nodes: IPioneerTreeExpandedNode[];

  constructor(private pioneerTreeService: PioneerTreeService) {
  }

  /**
   * TODO: Keep an eye on this to understand the in-memory values 
   *  coming from this.nodes and this.pioneerTreeService.nodes
   * 
   * TODO: Keep an eye on this to understand the update life cycle.
   *  If argument model is updated, do we loose all tracking because we are
   *  resetting nodes from the map
   * @param changes 
   */
  ngOnChanges(changes: any) {
    if (!this.nodes) return;

    this.nodes = this.nodes.map((x: IPioneerTreeExpandedNode) => {
      x.pioneerTreeNode = new PioneerTreeNode();
      return x;
    });
  }
}