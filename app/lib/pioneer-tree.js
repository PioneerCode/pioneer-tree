var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from './components/pioneer-tree-collapse/pioneer-tree-collapse.component';
import { PioneerTreeService } from "./services/pioneer-tree.service";
export { PioneerTreeComponent, PioneerTreeNodeComponent, PioneerTreeCollapseComponent, PioneerTreeService };
var PioneerTreeModule = (function () {
    function PioneerTreeModule() {
    }
    return PioneerTreeModule;
}());
PioneerTreeModule = __decorate([
    NgModule({
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
        imports: [],
        providers: [
            PioneerTreeService
        ]
    })
], PioneerTreeModule);
export { PioneerTreeModule };
export default PioneerTreeModule;
//# sourceMappingURL=pioneer-tree.js.map