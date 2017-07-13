"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var pioneer_tree_component_1 = require("./components/pioneer-tree/pioneer-tree.component");
exports.PioneerTreeComponent = pioneer_tree_component_1.PioneerTreeComponent;
var pioneer_tree_node_component_1 = require("./components/pioneer-tree-node/pioneer-tree-node.component");
exports.PioneerTreeNodeComponent = pioneer_tree_node_component_1.PioneerTreeNodeComponent;
var pioneer_tree_collapse_component_1 = require("./components/pioneer-tree-collapse/pioneer-tree-collapse.component");
exports.PioneerTreeCollapseComponent = pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent;
var PioneerTreeModule = (function () {
    function PioneerTreeModule() {
    }
    return PioneerTreeModule;
}());
PioneerTreeModule = __decorate([
    core_1.NgModule({
        declarations: [
            pioneer_tree_component_1.PioneerTreeComponent,
            pioneer_tree_node_component_1.PioneerTreeNodeComponent,
            pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent
        ],
        exports: [
            pioneer_tree_component_1.PioneerTreeComponent,
            pioneer_tree_node_component_1.PioneerTreeNodeComponent,
            pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent
        ],
        imports: [],
        providers: []
    })
], PioneerTreeModule);
exports.PioneerTreeModule = PioneerTreeModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PioneerTreeModule;
//# sourceMappingURL=pioneer-tree.js.map