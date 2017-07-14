"use strict";
var PioneerTreeExpandCollapseService = (function () {
    function PioneerTreeExpandCollapseService() {
    }
    PioneerTreeExpandCollapseService.prototype.expandCollapsedAllNodes = function (nodes, isCollapsed) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode.pioneerTreeRepeater.collapsed = isCollapsed;
            if (nodes[i].pioneerTreeNode.getChildNodes()) {
                this.recursivelySetCollapsedFlag(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
            }
        }
    };
    PioneerTreeExpandCollapseService.prototype.recursivelySetCollapsedFlag = function (nodes, isCollapsed) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].pioneerTreeNode.pioneerTreeRepeater.collapsed = isCollapsed;
            if (nodes[i].pioneerTreeNode.getChildNodes()) {
                this.recursivelySetCollapsedFlag(nodes[i].pioneerTreeNode.getChildNodes(), isCollapsed);
            }
        }
    };
    return PioneerTreeExpandCollapseService;
}());
exports.PioneerTreeExpandCollapseService = PioneerTreeExpandCollapseService;
//# sourceMappingURL=pioneer-tree-expand-collapse.service.js.map