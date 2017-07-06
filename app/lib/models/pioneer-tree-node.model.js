"use strict";
var pioneer_tree_repeater_model_1 = require("./pioneer-tree-repeater.model");
var PioneerTreeNode = (function () {
    function PioneerTreeNode(uidService) {
        this.uidService = uidService;
        this.isCurrentSelectedNode = false;
        this.uid = this.uidService.getUid();
        this.pioneerTreeRepeater = new pioneer_tree_repeater_model_1.PioneerTreeRepeater(this.uidService);
    }
    PioneerTreeNode.prototype.getId = function () {
        return this.uid;
    };
    PioneerTreeNode.prototype.getContentClasses = function () {
        var classes = [];
        if (this.isSelected()) {
            classes.push('pt-node-selected');
        }
        return classes;
    };
    PioneerTreeNode.prototype.isSelected = function () {
        if (!this.isCurrentSelectedNode) {
            return false;
        }
        return this.getId() === this.getId();
    };
    PioneerTreeNode.prototype.isCollapsed = function () {
        return this.pioneerTreeRepeater.collapsed;
    };
    PioneerTreeNode.prototype.showDropzonePosition = function () {
        if (this.isCollapsed()) {
            return false;
        }
        ;
        if (!this.currentNode[this.config.childPropertyName]) {
            return false;
        }
        ;
        return true;
    };
    PioneerTreeNode.prototype.showDropzoneEnd = function () {
        if (this.currentNode.pioneerTreeNode.parentNode) {
            if (this.currentNode.pioneerTreeNode.sortIndex === this.currentNode.pioneerTreeNode.parentNode[this.config.childPropertyName]) {
                return true;
            }
            ;
        }
        if (this.currentNode.pioneerTreeNode.sortIndex === this.nodesInCollection - 1) {
            return true;
        }
        ;
        return false;
    };
    return PioneerTreeNode;
}());
exports.PioneerTreeNode = PioneerTreeNode;
//# sourceMappingURL=pioneer-tree-node.model.js.map