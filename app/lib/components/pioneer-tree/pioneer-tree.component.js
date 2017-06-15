"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pioneer_tree_node_component_1 = require("../pioneer-tree-node/pioneer-tree-node.component");
var pioneer_tree_collapse_component_1 = require("../pioneer-tree-collapse/pioneer-tree-collapse.component");
var pioneer_tree_node_model_1 = require("../../models/pioneer-tree-node.model");
var pioneer_tree_service_1 = require("../../services/pioneer-tree.service");
var PioneerTreeComponent = (function () {
    function PioneerTreeComponent(pioneerTreeService) {
        this.pioneerTreeService = pioneerTreeService;
    }
    /**
     * TODO: Keep an eye on this to understand the in-memory values
     *  coming from this.nodes and this.pioneerTreeService.nodes
     *
     * TODO: Keep an eye on this to understand the update life cycle.
     *  If argument model is updated, do we loose all tracking because we are
     *  resetting nodes from the map
     * @param changes
     */
    PioneerTreeComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.nodes)
            return;
        this.nodes = this.nodes.map(function (x) {
            x.pioneerTreeNode = new pioneer_tree_node_model_1.PioneerTreeNode(_this.pioneerTreeService);
            return x;
        });
    };
    return PioneerTreeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PioneerTreeComponent.prototype, "nodes", void 0);
PioneerTreeComponent = __decorate([
    core_1.Component({
        selector: '[pioneer-tree],[pioneer-tree-repeater],[pt],[pt-repeater]',
        template: "\n  <span class=\"pioneer-tree\">\n    <ng-content></ng-content>\n  </span>\n  ",
        entryComponents: [
            pioneer_tree_node_component_1.PioneerTreeNodeComponent,
            pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent
        ]
    }),
    __metadata("design:paramtypes", [pioneer_tree_service_1.PioneerTreeService])
], PioneerTreeComponent);
exports.PioneerTreeComponent = PioneerTreeComponent;
//# sourceMappingURL=pioneer-tree.component.js.map