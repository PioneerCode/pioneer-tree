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
var pioneer_tree_node_component_1 = require("../pioneer-tree-node/pioneer-tree-node.component");
var pioneer_tree_collapse_component_1 = require("../pioneer-tree-collapse/pioneer-tree-collapse.component");
var PioneerTreeRepeaterComponent = (function () {
    function PioneerTreeRepeaterComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PioneerTreeRepeaterComponent.prototype.ngAfterContentInit = function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree');
        this.renderer.addClass(this.elementRef.nativeElement, 'pioneer-tree-repeater');
    };
    return PioneerTreeRepeaterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PioneerTreeRepeaterComponent.prototype, "nodes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PioneerTreeRepeaterComponent.prototype, "configuration", void 0);
PioneerTreeRepeaterComponent = __decorate([
    core_1.Component({
        selector: '[pioneer-tree-repeater],[pt-repeater]',
        template: "\n  <ng-content></ng-content>\n  ",
        entryComponents: [
            pioneer_tree_node_component_1.PioneerTreeNodeComponent,
            pioneer_tree_collapse_component_1.PioneerTreeCollapseComponent
        ]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2])
], PioneerTreeRepeaterComponent);
exports.PioneerTreeRepeaterComponent = PioneerTreeRepeaterComponent;
//# sourceMappingURL=pioneer-tree-repeater.component.js.map