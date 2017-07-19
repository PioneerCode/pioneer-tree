"use strict";
var PioneerTreeExpandCollapseService = (function () {
    function PioneerTreeExpandCollapseService() {
    }
    PioneerTreeExpandCollapseService.prototype.collapseAllExpandThisSetActive = function (currentNodes, expandNode, currentSelectedNode) {
        this.expandCollapsedAllNodes(currentNodes, true);
        if (currentSelectedNode) {
            currentSelectedNode.pioneerTreeNode.isCurrentSelectedNode = false;
        }
        expandNode.pioneerTreeNode.setCollapsed(false);
        expandNode.pioneerTreeNode.isCurrentSelectedNode = true;
        currentSelectedNode = expandNode;
    };
    PioneerTreeExpandCollapseService.prototype.expandCollapsedAllNodes = function (nodes, isCollapsed) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode.pioneerTreeRepeater.setCollapsed(isCollapsed);
            if (nodes[i].pioneerTreeNode.getChildNodes()) {
                this.recursivelySetCollapsedFlag(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
            }
        }
    };
    PioneerTreeExpandCollapseService.prototype.recursivelySetCollapsedFlag = function (nodes, isCollapsed) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode.pioneerTreeRepeater.setCollapsed(isCollapsed);
            if (nodes[i].pioneerTreeNode.getChildNodes()) {
                this.recursivelySetCollapsedFlag(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
            }
        }
    };
    return PioneerTreeExpandCollapseService;
}());
exports.PioneerTreeExpandCollapseService = PioneerTreeExpandCollapseService;
//# sourceMappingURL=pioneer-tree-expand-collapse.service.js.map