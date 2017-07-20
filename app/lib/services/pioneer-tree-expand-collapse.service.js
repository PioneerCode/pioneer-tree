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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var pioneer_tree_configuration_model_1 = require("../models/pioneer-tree-configuration.model");
var PioneerTreeExpandCollapseService = (function () {
    function PioneerTreeExpandCollapseService(config) {
        this.config = config;
    }
    PioneerTreeExpandCollapseService.prototype.collapseAllExpandThisSetActive = function (currentNodes, expandNode, currentSelectedNode) {
        // Collapse All
        this.expandCollapsedAllNodes(currentNodes, true, true);
        // Flip selected
        if (currentSelectedNode) {
            currentSelectedNode.pioneerTreeNode.isCurrentSelectedNode = false;
        }
        // Expand new
        expandNode.pioneerTreeNode.setCollapsed(false);
        // Open parents
        this.recursivelySetCollapsedFlagOfParents(expandNode, false);
        // Set as active
        expandNode.pioneerTreeNode.isCurrentSelectedNode = true;
        currentSelectedNode = expandNode;
    };
    PioneerTreeExpandCollapseService.prototype.expandCollapsedAllNodes = function (nodes, isCollapsed, deactivate) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode.pioneerTreeRepeater.setCollapsed(isCollapsed);
            if (deactivate) {
                nodes[i].pioneerTreeNode.isCurrentSelectedNode = false;
            }
            if (nodes[i].pioneerTreeNode.getChildNodes()) {
                this.expandCollapsedAllNodes(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
            }
        }
    };
    PioneerTreeExpandCollapseService.prototype.recursivelySetCollapsedFlagOfParents = function (node, isCollapsed) {
        if (node.pioneerTreeNode.parentNode) {
            node.pioneerTreeNode.parentNode.pioneerTreeNode.setCollapsed(isCollapsed);
            this.recursivelySetCollapsedFlagOfParents(node.pioneerTreeNode.parentNode, isCollapsed);
        }
    };
    return PioneerTreeExpandCollapseService;
}());
PioneerTreeExpandCollapseService = __decorate([
    __param(0, core_1.Inject(pioneer_tree_configuration_model_1.PioneerTreeConfiguration)),
    __metadata("design:paramtypes", [Object])
], PioneerTreeExpandCollapseService);
exports.PioneerTreeExpandCollapseService = PioneerTreeExpandCollapseService;
//# sourceMappingURL=pioneer-tree-expand-collapse.service.js.map