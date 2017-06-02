import { NgModule } from '@angular/core';

import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component';


export {
    PioneerTreeComponent,
    PioneerTreeNodeComponent
};

@NgModule({
    declarations: [
        PioneerTreeComponent,
        PioneerTreeNodeComponent
    ],
    exports: [
        PioneerTreeComponent,
        PioneerTreeNodeComponent
    ],
    imports: [
    ],
    providers: [
    ]
})
export class PioneerTreeModule { }

export default PioneerTreeModule;