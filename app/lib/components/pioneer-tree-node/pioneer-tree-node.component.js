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
var pioneer_tree_model_1 = require("../../models/pioneer-tree.model");
var PioneerTreeNodeComponent = (function () {
    function PioneerTreeNodeComponent(pioneerTree) {
        this.pioneerTree = pioneerTree;
        this.nodeDropped = new core_1.EventEmitter();
    }
    PioneerTreeNodeComponent.prototype.onNodeDropped = function ($event) {
        this.nodeDropped.emit($event);
    };
    PioneerTreeNodeComponent.prototype.onClicked = function () {
        // Clear previous selected node tracking at that node level
        if (this.pioneerTree.currentSelectedNode) {
            this.pioneerTree.currentSelectedNode.pioneerTreeNode.isCurrentSelectedNode = false;
        }
        // Set this node to current
        this.node.pioneerTreeNode.isCurrentSelectedNode = true;
        this.pioneerTree.currentSelectedNode = this.node;
    };
    return PioneerTreeNodeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PioneerTreeNodeComponent.prototype, "node", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], PioneerTreeNodeComponent.prototype, "nodeTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], PioneerTreeNodeComponent.prototype, "repeaterTemplate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PioneerTreeNodeComponent.prototype, "nodeDropped", void 0);
PioneerTreeNodeComponent = __decorate([
    core_1.Component({
        selector: '[pioneer-tree-node],[pt-node]',
        template: "\n<div class=\"pioneer-tree-dropzone pioneer-tree-dropzone-root\"\n    pioneer-tree-dropzone\n    [dropType]=\"node.pioneerTreeNode.treeRootNodes ? 'root' : 'child'\"\n    (nodeDropped)=\"onNodeDropped($event)\"\n    [node]=\"node\">\n</div>\n<div class=\"pioneer-tree-node\">\n    <div class=\"pioneer-tree-node-content\"\n        pioneer-tree-dropzone\n        (click)=\"onClicked()\"\n        [node]=\"node\"\n        (nodeDropped)=\"onNodeDropped($event)\"\n        [dropType]=\"'parent'\"\n        [ngClass]=\"node.pioneerTreeNode.getContentClasses()\">\n        <ng-container [ngTemplateOutlet]=\"nodeTemplate\" [ngOutletContext]=\"{ $implicit: node }\">\n        </ng-container>\n    </div>\n    <div class=\"pioneer-tree-repeater\"\n        [ngClass]=\"this.node.pioneerTreeNode.pioneerTreeRepeater.getClasses()\">\n        <ng-container [ngTemplateOutlet]=\"repeaterTemplate\"\n          [ngOutletContext]=\"{ $implicit: node }\">\n        </ng-container>\n    </div>\n</div>\n<div class=\"pioneer-tree-dropzone pioneer-tree-dropzone-end\"\n    *ngIf=\"node.pioneerTreeNode.showDropzoneEnd()\"\n    pioneer-tree-dropzone\n    (nodeDropped)=\"onNodeDropped($event)\"\n    [dropType]=\"node.pioneerTreeNode.treeRootNodes ? 'root-end' : 'child-end'\"\n    [node]=\"node\">\n</div>\n    "
    }),
    __metadata("design:paramtypes", [pioneer_tree_model_1.PioneerTree])
], PioneerTreeNodeComponent);
exports.PioneerTreeNodeComponent = PioneerTreeNodeComponent;
//# sourceMappingURL=pioneer-tree-node.component.js.map