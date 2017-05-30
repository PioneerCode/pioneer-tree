import { Component, Input } from '@angular/core';


@Component({
    selector: 'pioneer-tree-node',
    template: `
<li class="pioneer-tree-node">
    <a class ="iconButton" (click)="toggle()"> 
        <i class="fa fa-stop"></i> {{node.name}}
    </a>
    <ul>
  		<ng-template ngFor let-node [ngForOf]="node.folder.children">
  			<pioneer-tree-node [node]="node"></pioneer-tree-node>
  		</ng-template>
  	</ul>
</li>
  `,
    entryComponents: [],
    providers: []
})
export class PioneerTreeNodeComponent {
    @Input() node: any;

    constructor(
    ) { }

    ngOnInit() {
    }
}