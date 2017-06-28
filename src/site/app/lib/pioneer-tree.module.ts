import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeRepeaterComponent } from './components/pioneer-tree-repeater/pioneer-tree-repeater.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from './components/pioneer-tree-collapse/pioneer-tree-collapse.component'
import { PioneerTreeHandleComponent } from './components/pioneer-tree-handle/pioneer-tree-handle.component'
import { PioneerTreeDropzoneDirective } from './directives/pioneer-tree-dropzone/pioneer-tree-dropzone.directive'
import { PioneerTree, IPioneerTree } from "./models/pioneer-tree.model";

export {
    PioneerTreeComponent,
    PioneerTreeRepeaterComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent,
    PioneerTreeHandleComponent,
    PioneerTreeDropzoneDirective,
    PioneerTree
};

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        PioneerTreeComponent,
        PioneerTreeRepeaterComponent, 
        PioneerTreeNodeComponent,
        PioneerTreeCollapseComponent,
        PioneerTreeHandleComponent,
        PioneerTreeDropzoneDirective,
    ],
    exports: [
        PioneerTreeComponent,
        PioneerTreeRepeaterComponent,
        PioneerTreeNodeComponent,
        PioneerTreeCollapseComponent,
        PioneerTreeHandleComponent,
        PioneerTreeDropzoneDirective,
    ],
    providers: [
        PioneerTree
    ]
})

export class PioneerTreeModule { }
export default PioneerTreeModule;