import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from './components/pioneer-tree-collapse/pioneer-tree-collapse.component'
import { PioneerTreeService, IPioneerTreeService } from "./services/pioneer-tree.service"
import { PioneerTreeHandleComponent } from './components/pioneer-tree-handle/pioneer-tree-handle.component'
import { PioneerTreeDropzoneDirective } from './directives/pioneer-tree-dropzone/pioneer-tree-dropzone.directive'

export {
    PioneerTreeComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent,
    PioneerTreeHandleComponent,
    PioneerTreeDropzoneDirective,
    PioneerTreeService
};

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        PioneerTreeComponent,
        PioneerTreeNodeComponent,
        PioneerTreeCollapseComponent,
        PioneerTreeHandleComponent,
        PioneerTreeDropzoneDirective,
    ],
    exports: [
        PioneerTreeComponent,
        PioneerTreeNodeComponent,
        PioneerTreeCollapseComponent,
        PioneerTreeHandleComponent,
        PioneerTreeDropzoneDirective,
    ],
    providers: [
        PioneerTreeService
    ]
})
export class PioneerTreeModule { }

export default PioneerTreeModule;