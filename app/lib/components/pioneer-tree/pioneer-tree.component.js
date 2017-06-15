var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { PioneerTreeNodeComponent } from '../pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from '../pioneer-tree-collapse/pioneer-tree-collapse.component';
import { PioneerTreeNode } from "../../models/pioneer-tree-node.model";
import { PioneerTreeService } from "../../services/pioneer-tree.service";
var PioneerTreeComponent = (function () {
    function PioneerTreeComponent(pioneerTreeService) {
        this.pioneerTreeService = pioneerTreeService;
    }
    /**
     * TODO: Keep an eye on this to understand the in-memory values
     *  coming from this.nodes and this.pioneerTreeService.nodes
     *
     * TODO: Keep an eye on this to understand the update life cycle.
     *  If argument model is updated, do we loose all tracking because we are
     *  resetting nodes from the map
     * @param changes
     */
    PioneerTreeComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.nodes)
            return;
        this.nodes = this.nodes.map(function (x) {
            x.pioneerTreeNode = new PioneerTreeNode(_this.pioneerTreeService);
            return x;
        });
    };
    return PioneerTreeComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], PioneerTreeComponent.prototype, "nodes", void 0);
PioneerTreeComponent = __decorate([
    Component({
        selector: '[pioneer-tree],[pioneer-tree-repeater],[pt],[pt-repeater]',
        template: "\n  <span class=\"pioneer-tree\">\n    <ng-content></ng-content>\n  </span>\n  ",
        entryComponents: [
            PioneerTreeNodeComponent,
            PioneerTreeCollapseComponent
        ]
    }),
    __metadata("design:paramtypes", [PioneerTreeService])
], PioneerTreeComponent);
export { PioneerTreeComponent };
//# sourceMappingURL=pioneer-tree.component.js.map