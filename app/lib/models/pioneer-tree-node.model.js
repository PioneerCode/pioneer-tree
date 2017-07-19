"use strict";
var pioneer_tree_repeater_model_1 = require("./pioneer-tree-repeater.model");
var PioneerTreeNode = (function () {
    function PioneerTreeNode(uidService, treeDropService) {
        this.uidService = uidService;
        this.treeDropService = treeDropService;
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
    PioneerTreeNode.prototype.getChildNodes = function () {
        var paths = this.config.childPropertyName.split('.'), current = this.currentNode;
        for (var i = 0; i < paths.length; ++i) {
            if (current[paths[i]] === undefined) {
                return undefined;
            }
            else {
                current = current[paths[i]];
            }
        }
        return current;
    };
    PioneerTreeNode.prototype.isSelected = function () {
        if (!this.isCurrentSelectedNode) {
            return false;
        }
        return this.getId() === this.getId();
    };
    PioneerTreeNode.prototype.isCollapsed = function () {
        return this.pioneerTreeRepeater.isCollapsed();
    };
    PioneerTreeNode.prototype.setCollapsed = function (isCollapsed) {
        this.pioneerTreeRepeater.setCollapsed(isCollapsed);
    };
    PioneerTreeNode.prototype.showDropzonePosition = function () {
        if (this.isCollapsed()) {
            return false;
        }
        ;
        if (!this.getChildNodes()) {
            return false;
        }
        ;
        return true;
    };
    PioneerTreeNode.prototype.showDropzoneEnd = function () {
        // child
        if (!this.currentNode.pioneerTreeNode.treeRootNodes) {
            if (this.currentNode.pioneerTreeNode.getId() === this.getLastIdInParentNodeChildCollection()) {
                return true;
            }
            ;
            return false;
        }
        // root
        if (this.currentNode.pioneerTreeNode.sortIndex === this.currentNode.pioneerTreeNode.treeRootNodes.length - 1) {
            return true;
        }
        ;
        return false;
    };
    PioneerTreeNode.prototype.getLastIdInParentNodeChildCollection = function () {
        var a = this.currentNode.pioneerTreeNode.parentNode.pioneerTreeNode.getChildNodes();
        return a[a.length - 1].pioneerTreeNode.getId();
    };
    return PioneerTreeNode;
}());
exports.PioneerTreeNode = PioneerTreeNode;
//# sourceMappingURL=pioneer-tree-node.model.js.map