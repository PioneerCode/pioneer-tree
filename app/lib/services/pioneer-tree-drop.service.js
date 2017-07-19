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
var pioneer_tree_drop_parent_service_1 = require("../services/pioneer-tree-drop-parent.service");
var pioneer_tree_drop_child_service_1 = require("../services/pioneer-tree-drop-child.service");
var pioneer_tree_drop_root_service_1 = require("../services/pioneer-tree-drop-root.service");
var PioneerTreeDropService = (function () {
    function PioneerTreeDropService(dropRootService, dropParentService, dropChildService) {
        this.dropRootService = dropRootService;
        this.dropParentService = dropParentService;
        this.dropChildService = dropChildService;
    }
    PioneerTreeDropService.prototype.getCurrentDragNode = function () {
        return this.currentDragNode;
    };
    PioneerTreeDropService.prototype.setCurrentDragNode = function (node) {
        this.currentDragNode = node;
    };
    PioneerTreeDropService.prototype.isNodeDroppable = function (dropNode) {
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
    PioneerTreeDropService.prototype.dropNode = function (dropzone, dropType, droppedSortIndex) {
        if (!this.getCurrentDragNode()) {
            return;
        }
        switch (dropType) {
            case 'root':
                this.dropRootService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex);
                break;
            case 'root-end':
                this.dropRootService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex, true);
                break;
            case 'parent':
                this.dropParentService.dropNode(dropzone, this.getCurrentDragNode());
                break;
            case 'child':
                this.dropChildService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex);
                break;
            case 'child-end':
                this.dropChildService.dropNode(dropzone, this.getCurrentDragNode(), droppedSortIndex, true);
                break;
        }
        // // remove current drag node tracking
        // this.setCurrentDragNode(undefined);
    };
    return PioneerTreeDropService;
}());
PioneerTreeDropService = __decorate([
    __param(0, core_1.Inject(pioneer_tree_drop_root_service_1.PioneerTreeDropRootService)),
    __param(1, core_1.Inject(pioneer_tree_drop_parent_service_1.PioneerTreeDropParentService)),
    __param(2, core_1.Inject(pioneer_tree_drop_child_service_1.PioneerTreeDropChildService)),
    __metadata("design:paramtypes", [Object, Object, Object])
], PioneerTreeDropService);
exports.PioneerTreeDropService = PioneerTreeDropService;
//# sourceMappingURL=pioneer-tree-drop.service.js.map