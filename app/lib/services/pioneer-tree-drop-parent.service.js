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
var pioneer_tree_drop_service_1 = require("./pioneer-tree-drop.service");
var PioneerTreeDropParentService = (function (_super) {
    __extends(PioneerTreeDropParentService, _super);
    function PioneerTreeDropParentService(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        return _this;
    }
    PioneerTreeDropParentService.prototype.dropNode = function (dropzone, nodeToDrop) {
        var parentCollection = this.getParentCollection(nodeToDrop);
        this.prune(parentCollection, nodeToDrop.pioneerTreeNode.getId());
        this.dropNodeOntoNewCollection(dropzone, nodeToDrop);
        this.adjustIndexes(dropzone, nodeToDrop);
        this.adjustCollectionIndexes(parentCollection);
        this.adjustMetaTracking(nodeToDrop, parentCollection);
        this.adjustParentTracking(dropzone, nodeToDrop, parentCollection);
    };
    PioneerTreeDropParentService.prototype.dropNodeOntoNewCollection = function (dropzone, nodeToDrop) {
        if (dropzone[this.config.childPropertyName] === undefined) {
            dropzone[this.config.childPropertyName] = [];
        }
        dropzone[this.config.childPropertyName].push(nodeToDrop);
    };
    PioneerTreeDropParentService.prototype.adjustIndexes = function (dropzone, nodeToDrop) {
        nodeToDrop.pioneerTreeNode.sortIndex = dropzone[this.config.childPropertyName].length - 1;
        if (nodeToDrop[this.config.sortPropertyName]) {
            nodeToDrop[this.config.sortPropertyName] = nodeToDrop.pioneerTreeNode.sortIndex;
        }
    };
    PioneerTreeDropParentService.prototype.adjustParentTracking = function (dropzone, nodeToDrop, parentCollection) {
        nodeToDrop.pioneerTreeNode.parentNode = dropzone;
        nodeToDrop.pioneerTreeNode.treeRootNodes = [];
    };
    return PioneerTreeDropParentService;
}(pioneer_tree_drop_service_1.PioneerTreeDropService));
PioneerTreeDropParentService = __decorate([
    __param(0, core_1.Inject(pioneer_tree_configuration_model_1.PioneerTreeConfiguration)),
    __metadata("design:paramtypes", [Object])
], PioneerTreeDropParentService);
exports.PioneerTreeDropParentService = PioneerTreeDropParentService;
//# sourceMappingURL=pioneer-tree-drop-parent.service.js.map