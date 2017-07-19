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
/**
 * Adds drag and drop functionality to pioneer-tree-node child elements
 */
var PioneerTreeHandleComponent = (function () {
    function PioneerTreeHandleComponent(pioneerTree, elementRef, renderer) {
        this.pioneerTree = pioneerTree;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(PioneerTreeHandleComponent.prototype, "draggable", {
        /**
         * Enable HTML5 draggable on entire component
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Act on dragstart event
     */
    PioneerTreeHandleComponent.prototype.onDragStart = function (event) {
        this.pioneerTree.setCurrentDragNode(this.node);
        this.renderer.addClass(this.elementRef.nativeElement, 'pt-handle-drag-start');
    };
    /**
     * Act on drag end event
     */
    PioneerTreeHandleComponent.prototype.onDragEnd = function (event) {
        this.renderer.removeClass(this.elementRef.nativeElement, 'pt-handle-drag-start');
    };
    return PioneerTreeHandleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PioneerTreeHandleComponent.prototype, "node", void 0);
__decorate([
    core_1.HostBinding('draggable'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], PioneerTreeHandleComponent.prototype, "draggable", null);
__decorate([
    core_1.HostListener('dragstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], PioneerTreeHandleComponent.prototype, "onDragStart", null);
__decorate([
    core_1.HostListener('dragend'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], PioneerTreeHandleComponent.prototype, "onDragEnd", null);
PioneerTreeHandleComponent = __decorate([
    core_1.Component({
        selector: '[pioneer-tree-handle],[pt-handle]',
        template: "\n<span class=\"pioneer-tree-handle\">\n    <ng-content>\n    </ng-content>\n</span>\n    "
    }),
    __metadata("design:paramtypes", [pioneer_tree_model_1.PioneerTree,
        core_1.ElementRef,
        core_1.Renderer2])
], PioneerTreeHandleComponent);
exports.PioneerTreeHandleComponent = PioneerTreeHandleComponent;
//# sourceMappingURL=pioneer-tree-handle.component.js.map