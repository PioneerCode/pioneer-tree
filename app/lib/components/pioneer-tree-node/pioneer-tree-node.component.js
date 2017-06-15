var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, TemplateRef } from '@angular/core';
import { PioneerTreeService } from "../../services/pioneer-tree.service";
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
    Input(),
    __metadata("design:type", Object)
], PioneerTreeNodeComponent.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], PioneerTreeNodeComponent.prototype, "nodeTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], PioneerTreeNodeComponent.prototype, "repeaterTemplate", void 0);
PioneerTreeNodeComponent = __decorate([
    Component({
        selector: '[pioneer-tree-node],[pt-node]',
        template: "\n<div class=\"pioneer-tree-node\">\n    <div class=\"pioneer-tree-node-content\"\n        (click)=\"onClicked()\"\n        [ngClass]=\"this.node.pioneerTreeNode.getContentClasses()\">\n        <ng-container [ngTemplateOutlet]=\"nodeTemplate\" [ngOutletContext]=\"{ $implicit: node }\">\n        </ng-container> \n    </div>\n    <div class=\"pioneer-tree-repeater\" [ngClass]=\"this.node.pioneerTreeNode.pioneerTreeRepeater.getClasses()\">\n        <ng-container [ngTemplateOutlet]=\"repeaterTemplate\" [ngOutletContext]=\"{ $implicit: node }\">\n        </ng-container>\n    </div>\n</div>\n    "
    }),
    __metadata("design:paramtypes", [PioneerTreeService])
], PioneerTreeNodeComponent);
export { PioneerTreeNodeComponent };
//# sourceMappingURL=pioneer-tree-node.component.js.map