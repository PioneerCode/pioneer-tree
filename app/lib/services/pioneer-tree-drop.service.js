"use strict";
var PioneerTreeDropService = (function () {
    function PioneerTreeDropService(config) {
        this.config = config;
    }
    PioneerTreeDropService.prototype.getParentCollection = function (nodeToDrop) {
        return nodeToDrop.pioneerTreeNode.treeRootNodes && nodeToDrop.pioneerTreeNode.treeRootNodes.length > 0 ?
            nodeToDrop.pioneerTreeNode.treeRootNodes :
            nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName];
    };
    PioneerTreeDropService.prototype.adjustCollectionIndexes = function (collection) {
        for (var i = 0; i < collection.length; i++) {
            collection[i].pioneerTreeNode.sortIndex = i;
            if (collection[i][this.config.sortPropertyName] !== undefined && collection[i][this.config.sortPropertyName] !== null) {
                collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
            }
        }
    };
    PioneerTreeDropService.prototype.adjustMetaTracking = function (nodeToDrop, parentCollection) {
        nodeToDrop.pioneerTreeNode.previousNode = nodeToDrop.pioneerTreeNode.sortIndex === 0 ? {} : parentCollection[nodeToDrop.pioneerTreeNode.sortIndex - 1];
        nodeToDrop.pioneerTreeNode.nodesInCollection = parentCollection.length;
    };
    PioneerTreeDropService.prototype.prune = function (nodes, nodeId) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].pioneerTreeNode.getId() === nodeId) {
                nodes.splice(i, 1);
                return;
            }
        }
    };
    return PioneerTreeDropService;
}());
exports.PioneerTreeDropService = PioneerTreeDropService;
//# sourceMappingURL=pioneer-tree-drop.service.js.map