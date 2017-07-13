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
var PioneerTreeComponent = (function () {
    function PioneerTreeComponent(pioneerTree, elementRef, renderer) {
        this.pioneerTree = pioneerTree;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PioneerTreeComponent.prototype.ngAfterContentInit = function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree');
        this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree-root');
    };
    /**
     * TODO: Keep an eye on this to understand the update life cycle.
     *  If argument model is updated, do we loose all tracking because we are
     *  resetting nodes from the map
     * @param changes
     */
    PioneerTreeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.nodes) {
            return;
        }
        this.pioneerTree.buildTree(this.nodes, this.configuration);
    };
    return PioneerTreeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PioneerTreeComponent.prototype, "nodes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PioneerTreeComponent.prototype, "configuration", void 0);
PioneerTreeComponent = __decorate([
    core_1.Component({
        selector: 'pioneer-tree,[pioneer-tree],[pt]',
        template: "\n  <ng-content></ng-content>\n  "
    }),
    __metadata("design:paramtypes", [pioneer_tree_model_1.PioneerTree,
        core_1.ElementRef,
        core_1.Renderer2])
], PioneerTreeComponent);
exports.PioneerTreeComponent = PioneerTreeComponent;
//# sourceMappingURL=pioneer-tree.component.js.map