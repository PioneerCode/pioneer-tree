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
var pioneer_tree_service_1 = require("../../services/pioneer-tree.service");
var PioneerTreeNodeComponent = (function () {
    function PioneerTreeNodeComponent(treeService) {
        this.treeService = treeService;
    }
    PioneerTreeNodeComponent.prototype.onClicked = function () {
        this.treeService.currentSelectedNodeId = this.node.pioneerTreeNode.getId();
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
PioneerTreeNodeComponent = __decorate([
    core_1.Component({
        selector: '[pioneer-tree-node],[pt-node]',
        template: "\n<div class=\"pioneer-tree-node\">\n    <div class=\"pioneer-tree-node-content\"\n        (click)=\"onClicked()\"\n        [ngClass]=\"this.node.pioneerTreeNode.getContentClasses()\">\n        <ng-container [ngTemplateOutlet]=\"nodeTemplate\" [ngOutletContext]=\"{ $implicit: node }\">\n        </ng-container> \n    </div>\n    <div class=\"pioneer-tree-repeater\" [ngClass]=\"this.node.pioneerTreeNode.pioneerTreeRepeater.getClasses()\">\n        <ng-container [ngTemplateOutlet]=\"repeaterTemplate\" [ngOutletContext]=\"{ $implicit: node }\">\n        </ng-container>\n    </div>\n</div>\n    "
    }),
    __metadata("design:paramtypes", [pioneer_tree_service_1.PioneerTreeService])
], PioneerTreeNodeComponent);
exports.PioneerTreeNodeComponent = PioneerTreeNodeComponent;
//# sourceMappingURL=pioneer-tree-node.component.js.map