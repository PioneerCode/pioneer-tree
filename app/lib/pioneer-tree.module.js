"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pioneer_tree_component_1 = require("./components/pioneer-tree/pioneer-tree.component");
var pioneer_tree_repeater_component_1 = require("./components/pioneer-tree-repeater/pioneer-tree-repeater.component");
var pioneer_tree_node_component_1 = require("./components/pioneer-tree-node/pioneer-tree-node.component");
var pioneer_tree_collapse_component_1 = require("./components/pioneer-tree-collapse/pioneer-tree-collapse.component");
var pioneer_tree_handle_component_1 = require("./components/pioneer-tree-handle/pioneer-tree-handle.component");
var pioneer_tree_dropzone_directive_1 = require("./directives/pioneer-tree-dropzone/pioneer-tree-dropzone.directive");
var pioneer_tree_model_1 = require("./models/pioneer-tree.model");
var pioneer_tree_drop_parent_service_1 = require("./services/pioneer-tree-drop-parent.service");
var pioneer_tree_configuration_model_1 = require("./models/pioneer-tree-configuration.model");
var pioneer_tree_drop_child_service_1 = require("./services/pioneer-tree-drop-child.service");
var pioneer_tree_drop_root_service_1 = require("./services/pioneer-tree-drop-root.service");
var pioneer_tree_uid_service_1 = require("./services/pioneer-tree-uid.service");
var PioneerTreeModule = (function () {
    function PioneerTreeModule() {
    }
    return PioneerTreeModule;
}());
PioneerTreeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            pioneer_tree_component_1.PioneerTreeComponent,
            pioneer_tree_repeater_component_1.PioneerTreeRepeaterComponent,
            pioneer_tree_node_component_1.PioneerTreeNodeComponent,
            pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent,
            pioneer_tree_handle_component_1.PioneerTreeHandleComponent,
            pioneer_tree_dropzone_directive_1.PioneerTreeDropzoneDirective
        ],
        exports: [
            pioneer_tree_component_1.PioneerTreeComponent,
            pioneer_tree_repeater_component_1.PioneerTreeRepeaterComponent,
            pioneer_tree_node_component_1.PioneerTreeNodeComponent,
            pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent,
            pioneer_tree_handle_component_1.PioneerTreeHandleComponent,
            pioneer_tree_dropzone_directive_1.PioneerTreeDropzoneDirective
        ],
        providers: [
            pioneer_tree_model_1.PioneerTree,
            pioneer_tree_drop_root_service_1.PioneerTreeDropRootService,
            pioneer_tree_drop_parent_service_1.PioneerTreeDropParentService,
            pioneer_tree_drop_child_service_1.PioneerTreeDropChildService,
            pioneer_tree_uid_service_1.PioneerTreeUidService,
            pioneer_tree_configuration_model_1.PioneerTreeConfiguration
        ]
    })
], PioneerTreeModule);
exports.PioneerTreeModule = PioneerTreeModule;
//# sourceMappingURL=pioneer-tree.module.js.map