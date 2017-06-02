import { Component, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';
import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component'

@Component({
  selector: 'pioneer-tree',
  templateUrl: './pioneer-tree.html',
  entryComponents: [PioneerTreeNodeComponent],
  providers: []
})
export class PioneerTreeComponent {
  @Input() nodes: any[];
  @Input() template: any;
  @ContentChild('nodeTemplate') nodeTemplate: TemplateRef<any>;

  constructor(
  ) { }

  ngOnInit() {
    if(!this.nodeTemplate){
      this.nodeTemplate = this.template;
    }
  }
}