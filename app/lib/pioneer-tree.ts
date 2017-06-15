import { NgModule } from '@angular/core';

import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from './components/pioneer-tree-collapse/pioneer-tree-collapse.component'
import { PioneerTreeService, IPioneerTreeService } from "./services/pioneer-tree.service"

export {
    PioneerTreeComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent,
    PioneerTreeService
};

@NgModule({
    declarations: [
        PioneerTreeComponent,
        PioneerTreeNodeComponent,
        PioneerTreeCollapseComponent
    ],
    exports: [
        PioneerTreeComponent,
        PioneerTreeNodeComponent,
        PioneerTreeCollapseComponent
    ],
    imports: [
    ],
    providers: [
        PioneerTreeService
    ]
})
export class PioneerTreeModule { }

export default PioneerTreeModule;