"use strict";
var PioneerTreeDropBaseService = (function () {
    function PioneerTreeDropBaseService(config) {
        this.config = config;
    }
    PioneerTreeDropBaseService.prototype.getParentCollection = function (nodeToDrop) {
        return nodeToDrop.pioneerTreeNode.treeRootNodes && nodeToDrop.pioneerTreeNode.treeRootNodes.length > 0 ?
            nodeToDrop.pioneerTreeNode.treeRootNodes :
            nodeToDrop.pioneerTreeNode.parentNode[this.config.childPropertyName];
    };
    PioneerTreeDropBaseService.prototype.adjustCollectionIndexes = function (collection) {
        for (var i = 0; i < collection.length; i++) {
            collection[i].pioneerTreeNode.sortIndex = i;
            if (collection[i][this.config.sortPropertyName] !== undefined && collection[i][this.config.sortPropertyName] !== null) {
                collection[i][this.config.sortPropertyName] = collection[i].pioneerTreeNode.sortIndex;
            }
        }
    };
    PioneerTreeDropBaseService.prototype.adjustMetaTracking = function (nodeToDrop, parentCollection) {
        nodeToDrop.pioneerTreeNode.previousNode = nodeToDrop.pioneerTreeNode.sortIndex === 0 ? {} : parentCollection[nodeToDrop.pioneerTreeNode.sortIndex - 1];
        nodeToDrop.pioneerTreeNode.nodesInCollection = parentCollection.length;
    };
    PioneerTreeDropBaseService.prototype.prune = function (nodes, nodeId) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].pioneerTreeNode.getId() === nodeId) {
                nodes.splice(i, 1);
                return;
            }
        }
    };
    return PioneerTreeDropBaseService;
}());
exports.PioneerTreeDropBaseService = PioneerTreeDropBaseService;
//# sourceMappingURL=pioneer-tree-drop-base.service.js.map