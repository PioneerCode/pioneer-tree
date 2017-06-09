import { NgModule } from '@angular/core';

import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from './components/pioneer-tree-collapse/pioneer-tree-collapse.component'

export {
    PioneerTreeComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
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
    ]
})
export class PioneerTreeModule { }

export default PioneerTreeModule;