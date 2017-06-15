"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var pioneer_tree_component_1 = require("./lib/components/pioneer-tree/pioneer-tree.component");
var pioneer_tree_node_component_1 = require("./lib/components/pioneer-tree-node/pioneer-tree-node.component");
var pioneer_tree_collapse_component_1 = require("./lib/components/pioneer-tree-collapse/pioneer-tree-collapse.component");
var pioneer_tree_service_1 = require("./lib/services/pioneer-tree.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent,
            pioneer_tree_component_1.PioneerTreeComponent,
            pioneer_tree_node_component_1.PioneerTreeNodeComponent,
            pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [pioneer_tree_service_1.PioneerTreeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map