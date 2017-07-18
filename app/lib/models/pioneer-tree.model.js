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
var pioneer_tree_node_model_1 = require("./pioneer-tree-node.model");
var pioneer_tree_drop_parent_service_1 = require("../services/pioneer-tree-drop-parent.service");
var pioneer_tree_drop_child_service_1 = require("../services/pioneer-tree-drop-child.service");
var pioneer_tree_drop_root_service_1 = require("../services/pioneer-tree-drop-root.service");
var pioneer_tree_uid_service_1 = require("../services/pioneer-tree-uid.service");
var pioneer_tree_expand_collapse_service_1 = require("../services/pioneer-tree-expand-collapse.service");
var PioneerTree = (function () {
    function PioneerTree(config, dropRootService, dropParentService, dropChildService, uidService, expandCollapseService) {
        this.config = config;
        this.dropRootService = dropRootService;
        this.dropParentService = dropParentService;
        this.dropChildService = dropChildService;
        this.uidService = uidService;
        this.expandCollapseService = expandCollapseService;
    }
    PioneerTree.prototype.buildTree = function (nodes, configuration) {
        this.currentNodes = nodes;
        this.buildConfiguration(configuration);
        this.buildExpandedNoded();
        if (this.config.collapseAllOnLoad) {
            this.collapseAllNodes();
        }
    };
    PioneerTree.prototype.isNodeDroppable = function (dropNode) {
        // Guard
        if (!this.currentDragNode) {
            return false;
        }
        // Don't drop on self
        if (dropNode.pioneerTreeNode.getId() === this.currentDragNode.pioneerTreeNode.getId()) {
            return false;
        }
        // Always allow root drops
        if (dropNode.pioneerTreeNode.treeRootNodes && dropNode.pioneerTreeNode.treeRootNodes.length > 0) {
            return true;
        }
        // Don't allow parent to drop in child collection(s)
        if (dropNode.pioneerTreeNode.parentNode.pioneerTreeNode.getId() === this.currentDragNode.pioneerTreeNode.getId()) {
            return false;
        }
        return true;
    };
    PioneerTree.prototype.dropNode = function (dropzone, dropType, droppedSortIndex) {
        if (!this.currentDragNode) {
            return;
        }
        switch (dropType) {
            case 'root':
                this.dropRootService.dropNode(dropzone, this.currentDragNode, droppedSortIndex);
                break;
            case 'root-end':
                this.dropRootService.dropNode(dropzone, this.currentDragNode, droppedSortIndex, true);
                break;
            case 'parent':
                this.dropParentService.dropNode(dropzone, this.currentDragNode);
                break;
            case 'child':
                this.dropChildService.dropNode(dropzone, this.currentDragNode, droppedSortIndex);
                break;
            case 'child-end':
                this.dropChildService.dropNode(dropzone, this.currentDragNode, droppedSortIndex, true);
                break;
        }
        // remove current drag node tracking
        // TODO: Do we need to remove this
        this.currentDragNode = undefined;
    };
    PioneerTree.prototype.expandAllNodes = function () {
        this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, false);
    };
    PioneerTree.prototype.collapseAllNodes = function () {
        this.expandCollapseService.expandCollapsedAllNodes(this.currentNodes, true);
    };
    /**
     * Bind public config to default config
     */
    PioneerTree.prototype.buildConfiguration = function (configuration) {
        var config = new pioneer_tree_configuration_model_1.PioneerTreeConfiguration();
        this.config = Object.assign(config, configuration);
    };
    /**
     * Bind IPioneerTreeExpandedNodes
     */
    PioneerTree.prototype.buildExpandedNoded = function () {
        for (var i = 0; i < this.currentNodes.length; i++) {
            this.currentNodes[i].pioneerTreeNode = new pioneer_tree_node_model_1.PioneerTreeNode(this.uidService);
            this.currentNodes[i].pioneerTreeNode.config = this.config;
            this.currentNodes[i].pioneerTreeNode.currentNode = this.currentNodes[i];
            this.currentNodes[i].pioneerTreeNode.nodesInCollection = this.currentNodes.length;
            this.currentNodes[i].pioneerTreeNode.treeRootNodes = this.currentNodes;
            this.setSortIndex(this.currentNodes[i], i);
            if (this.currentNodes[i].pioneerTreeNode.getChildNodes()) {
                this.bindNodesToInternalTracking(this.currentNodes[i].pioneerTreeNode.getChildNodes(), this.currentNodes[i]);
            }
        }
    };
    /**
     * Recursively build internal tracking tree
     * @param nodes Collection of nodes
     */
    PioneerTree.prototype.bindNodesToInternalTracking = function (nodes, parent) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode = new pioneer_tree_node_model_1.PioneerTreeNode(this.uidService);
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
    PioneerTree.prototype.setSortIndex = function (node, index) {
        if (node[this.config.sortPropertyName]) {
            node.pioneerTreeNode.sortIndex = node[this.config.sortPropertyName];
            return;
        }
        node.pioneerTreeNode.sortIndex = index;
    };
    return PioneerTree;
}());
PioneerTree = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(pioneer_tree_configuration_model_1.PioneerTreeConfiguration)),
    __param(1, core_1.Inject(pioneer_tree_drop_root_service_1.PioneerTreeDropRootService)),
    __param(2, core_1.Inject(pioneer_tree_drop_parent_service_1.PioneerTreeDropParentService)),
    __param(3, core_1.Inject(pioneer_tree_drop_child_service_1.PioneerTreeDropChildService)),
    __param(4, core_1.Inject(pioneer_tree_uid_service_1.PioneerTreeUidService)),
    __param(5, core_1.Inject(pioneer_tree_expand_collapse_service_1.PioneerTreeExpandCollapseService)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], PioneerTree);
exports.PioneerTree = PioneerTree;
//# sourceMappingURL=pioneer-tree.model.js.map