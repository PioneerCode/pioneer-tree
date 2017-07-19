"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var pioneer_tree_drop_base_service_1 = require("./pioneer-tree-drop-base.service");
var PioneerTreeDropRootService = (function (_super) {
    __extends(PioneerTreeDropRootService, _super);
    function PioneerTreeDropRootService(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        return _this;
    }
    PioneerTreeDropRootService.prototype.dropNode = function (dropzone, nodeToDrop, droppedSortIndex, rootEnd) {
        var parentCollection = this.getParentCollection(nodeToDrop);
        this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());
        this.dropNodeOntoNewCollection(dropzone, nodeToDrop, droppedSortIndex, rootEnd);
        this.adjustCollectionIndexes(dropzone.pioneerTreeNode.treeRootNodes);
        this.adjustCollectionIndexes(parentCollection);
        this.adjustParentTracking(dropzone, nodeToDrop, parentCollection);
        this.adjustMetaTracking(nodeToDrop, parentCollection);
    };
    PioneerTreeDropRootService.prototype.dropNodeOntoNewCollection = function (dropzone, nodeToDrop, droppedSortIndex, rootEnd) {
        droppedSortIndex = this.getAdjustedDropSortIndex(dropzone.pioneerTreeNode.treeRootNodes, nodeToDrop, droppedSortIndex, rootEnd);
        dropzone.pioneerTreeNode.treeRootNodes.splice(droppedSortIndex, 0, nodeToDrop);
    };
    PioneerTreeDropRootService.prototype.getAdjustedDropSortIndex = function (collection, nodeToDrop, droppedSortIndex, rootEnd) {
        // Child to root drops
        if (!nodeToDrop.pioneerTreeNode.treeRootNodes) {
            return droppedSortIndex;
        }
        // dropped in root-end of last index
        if (droppedSortIndex === collection.length && rootEnd) {
            return ++droppedSortIndex;
        }
        // dropped in root of last index
        // Not moving up the tree
        if (droppedSortIndex === collection.length - 1 && !rootEnd && droppedSortIndex >= nodeToDrop.pioneerTreeNode.sortIndex) {
            return --droppedSortIndex;
        }
        // moving down the tree
        if (droppedSortIndex > nodeToDrop.pioneerTreeNode.sortIndex) {
            return --droppedSortIndex;
        }
        return droppedSortIndex;
    };
    PioneerTreeDropRootService.prototype.adjustParentTracking = function (dropzone, nodeToDrop, parentCollection) {
        nodeToDrop.pioneerTreeNode.parentNode = {};
        nodeToDrop.pioneerTreeNode.treeRootNodes = dropzone.pioneerTreeNode.treeRootNodes;
    };
    return PioneerTreeDropRootService;
}(pioneer_tree_drop_base_service_1.PioneerTreeDropBaseService));
PioneerTreeDropRootService = __decorate([
    __param(0, core_1.Inject(pioneer_tree_configuration_model_1.PioneerTreeConfiguration)),
    __metadata("design:paramtypes", [Object])
], PioneerTreeDropRootService);
exports.PioneerTreeDropRootService = PioneerTreeDropRootService;
//# sourceMappingURL=pioneer-tree-drop-root.service.js.map