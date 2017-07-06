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
 * Define a dom element as droppable
 */
var PioneerTreeDropzoneDirective = (function () {
    function PioneerTreeDropzoneDirective(elementRef, renderer, pioneerTree) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.pioneerTree = pioneerTree;
    }
    PioneerTreeDropzoneDirective.prototype.onDragOver = function (event) {
        if (this.pioneerTree.isNodeDroppable(this.node)) {
            event.preventDefault();
            this.renderer.addClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over');
            return;
        }
        this.renderer.addClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over-deny');
    };
    PioneerTreeDropzoneDirective.prototype.onDragLeave = function (event) {
        this.clearClasses();
    };
    PioneerTreeDropzoneDirective.prototype.onDrop = function (event) {
        if (this.pioneerTree.isNodeDroppable(this.node)) {
            event.preventDefault();
            this.clearClasses();
            this.pioneerTree.dropNode(this.node, this.dropType, this.node.pioneerTreeNode.sortIndex);
        }
    };
    PioneerTreeDropzoneDirective.prototype.clearClasses = function () {
        this.renderer.removeClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over');
        this.renderer.removeClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over-deny');
    };
    return PioneerTreeDropzoneDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PioneerTreeDropzoneDirective.prototype, "node", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PioneerTreeDropzoneDirective.prototype, "dropType", void 0);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], PioneerTreeDropzoneDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], PioneerTreeDropzoneDirective.prototype, "onDragLeave", null);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], PioneerTreeDropzoneDirective.prototype, "onDrop", null);
PioneerTreeDropzoneDirective = __decorate([
    core_1.Directive({
        selector: '[pioneer-tree-dropzone],[pt-dropzone]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer2,
        pioneer_tree_model_1.PioneerTree])
], PioneerTreeDropzoneDirective);
exports.PioneerTreeDropzoneDirective = PioneerTreeDropzoneDirective;
//# sourceMappingURL=pioneer-tree-dropzone.directive.js.map