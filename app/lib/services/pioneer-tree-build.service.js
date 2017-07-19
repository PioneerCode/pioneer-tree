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
var pioneer_tree_node_model_1 = require("../models/pioneer-tree-node.model");
var pioneer_tree_uid_service_1 = require("../services/pioneer-tree-uid.service");
var pioneer_tree_expand_collapse_service_1 = require("../services/pioneer-tree-expand-collapse.service");
var pioneer_tree_drop_service_1 = require("../services/pioneer-tree-drop.service");
var PioneerTreeBuildService = (function () {
    function PioneerTreeBuildService(config, uidService, expandCollapseService, treeDropService) {
        this.config = config;
        this.uidService = uidService;
        this.expandCollapseService = expandCollapseService;
        this.treeDropService = treeDropService;
    }
    PioneerTreeBuildService.prototype.buildTree = function (nodes, configuration) {
        this.buildConfiguration(configuration);
        this.buildExpandedNode(nodes);
        if (this.config.collapseAllOnLoad) {
            this.expandCollapseService.expandCollapsedAllNodes(nodes, true);
        }
    };
    /**
     * Bind public config to default config
     */
    PioneerTreeBuildService.prototype.buildConfiguration = function (configuration) {
        var config = new pioneer_tree_configuration_model_1.PioneerTreeConfiguration();
        this.config = Object.assign(config, configuration);
    };
    /**
     * Bind IPioneerTreeExpandedNodes
     */
    PioneerTreeBuildService.prototype.buildExpandedNode = function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode = new pioneer_tree_node_model_1.PioneerTreeNode(this.uidService, this.treeDropService);
            nodes[i].pioneerTreeNode.config = this.config;
            nodes[i].pioneerTreeNode.currentNode = nodes[i];
            nodes[i].pioneerTreeNode.nodesInCollection = nodes.length;
            nodes[i].pioneerTreeNode.treeRootNodes = nodes;
            this.setSortIndex(nodes[i], i);
            if (nodes[i].pioneerTreeNode.getChildNodes()) {
                this.bindNodesToInternalTracking(nodes[i].pioneerTreeNode.getChildNodes(), nodes[i]);
            }
        }
    };
    /**
     * Recursively build internal tracking tree
     * @param nodes Collection of nodes
     */
    PioneerTreeBuildService.prototype.bindNodesToInternalTracking = function (nodes, parent) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode = new pioneer_tree_node_model_1.PioneerTreeNode(this.uidService, this.treeDropService);
            nodes[i].pioneerTreeNode.config = this.config;
            nodes[i].pioneerTreeNode.parentNode = parent;
            nodes[i].pioneerTreeNode.previousNode = nodes[i - 1];
            nodes[i].pioneerTreeNode.currentNode = nodes[i];
            nodes[i].pioneerTreeNode.nodesInCollection = nodes.length;
            this.setSortIndex(nodes[i], i);
            nodes[i].pioneerTreeNode.getChildNodes();
            if (nodes[i].pioneerTreeNode.getChildNodes()) {
                this.bindNodesToInternalTracking(nodes[i].pioneerTreeNode.getChildNodes(), nodes[i]);
            }
        }
    };
    /**
     * Bind sort property through configuration
     * @param node Bindable node
     */
    PioneerTreeBuildService.prototype.setSortIndex = function (node, index) {
        if (node[this.config.sortPropertyName]) {
            node.pioneerTreeNode.sortIndex = node[this.config.sortPropertyName];
            return;
        }
        node.pioneerTreeNode.sortIndex = index;
    };
    return PioneerTreeBuildService;
}());
PioneerTreeBuildService = __decorate([
    __param(0, core_1.Inject(pioneer_tree_configuration_model_1.PioneerTreeConfiguration)),
    __param(1, core_1.Inject(pioneer_tree_uid_service_1.PioneerTreeUidService)),
    __param(2, core_1.Inject(pioneer_tree_expand_collapse_service_1.PioneerTreeExpandCollapseService)),
    __param(3, core_1.Inject(pioneer_tree_drop_service_1.PioneerTreeDropService)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], PioneerTreeBuildService);
exports.PioneerTreeBuildService = PioneerTreeBuildService;
//# sourceMappingURL=pioneer-tree-build.service.js.map