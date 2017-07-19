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
var pioneer_tree_configuration_model_1 = require("./pioneer-tree-configuration.model");
var pioneer_tree_drop_parent_service_1 = require("../services/pioneer-tree-drop-parent.service");
var pioneer_tree_drop_child_service_1 = require("../services/pioneer-tree-drop-child.service");
var pioneer_tree_drop_root_service_1 = require("../services/pioneer-tree-drop-root.service");
var pioneer_tree_uid_service_1 = require("../services/pioneer-tree-uid.service");
var pioneer_tree_build_service_1 = require("../services/pioneer-tree-build.service");
var pioneer_tree_expand_collapse_service_1 = require("../services/pioneer-tree-expand-collapse.service");
var pioneer_tree_drop_service_1 = require("../services/pioneer-tree-drop.service");
var pioneer_tree_stringify_service_1 = require("../services/pioneer-tree-stringify.service");
var PioneerTree = (function () {
    function PioneerTree(config, buildService, dropRootService, dropParentService, dropChildService, uidService, expandCollapseService, treeDropService, stringifyService) {
        this.config = config;
        this.buildService = buildService;
        this.dropRootService = dropRootService;
        this.dropParentService = dropParentService;
        this.dropChildService = dropChildService;
        this.uidService = uidService;
        this.expandCollapseService = expandCollapseService;
        this.treeDropService = treeDropService;
        this.stringifyService = stringifyService;
    }
    PioneerTree.prototype.buildTree = function (nodes, configuration) {
        this.currentNodes = nodes;
        this.buildService.buildTree(this.currentNodes, configuration);
    };
    PioneerTree.prototype.getCurrentDragNode = function () {
        return this.treeDropService.getCurrentDragNode();
    };
    PioneerTree.prototype.setCurrentDragNode = function (node) {
        this.treeDropService.setCurrentDragNode(node);
    };
    PioneerTree.prototype.dropNode = function (dropzone, dropType, droppedSortIndex) {
        this.treeDropService.dropNode(dropzone, dropType, droppedSortIndex);
    };
    PioneerTree.prototype.isNodeDroppable = function (dropNode) {
        return this.treeDropService.isNodeDroppable(dropNode);
    };
    PioneerTree.prototype.expandAllNodes = function () {
        this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, false);
    };
    PioneerTree.prototype.collapseAllNodes = function () {
        this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, true);
    };
    PioneerTree.prototype.collapseAllExpandThisSetActive = function (node) {
        this.expandCollapseService.collapseAllExpandThisSetActive(this.currentNodes, node, this.currentSelectedNode);
    };
    PioneerTree.prototype.getRawTree = function () {
        return this.stringifyService.getRawTree(this.currentNodes);
    };
    PioneerTree.prototype.getExpandedTree = function () {
        return this.stringifyService.getExpandedTree(this.currentNodes);
    };
    return PioneerTree;
}());
PioneerTree = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(pioneer_tree_configuration_model_1.PioneerTreeConfiguration)),
    __param(1, core_1.Inject(pioneer_tree_build_service_1.PioneerTreeBuildService)),
    __param(2, core_1.Inject(pioneer_tree_drop_root_service_1.PioneerTreeDropRootService)),
    __param(3, core_1.Inject(pioneer_tree_drop_parent_service_1.PioneerTreeDropParentService)),
    __param(4, core_1.Inject(pioneer_tree_drop_child_service_1.PioneerTreeDropChildService)),
    __param(5, core_1.Inject(pioneer_tree_uid_service_1.PioneerTreeUidService)),
    __param(6, core_1.Inject(pioneer_tree_expand_collapse_service_1.PioneerTreeExpandCollapseService)),
    __param(7, core_1.Inject(pioneer_tree_drop_service_1.PioneerTreeDropService)),
    __param(8, core_1.Inject(pioneer_tree_stringify_service_1.PioneerTreeStringifyService)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
], PioneerTree);
exports.PioneerTree = PioneerTree;
//# sourceMappingURL=pioneer-tree.model.js.map