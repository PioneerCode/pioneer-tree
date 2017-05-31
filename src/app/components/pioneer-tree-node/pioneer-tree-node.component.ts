import { Component, Input } from '@angular/core';


@Component({
    selector: 'pioneer-tree-node',
    templateUrl: './pioneer-tree-node.html',
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