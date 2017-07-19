"use strict";
var PioneerTreeStringifyService = (function () {
    function PioneerTreeStringifyService() {
    }
    PioneerTreeStringifyService.prototype.getExpandedTree = function (nodes) {
        var build = JSON.stringify(nodes, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (key === 'currentNode') {
                    return '@ptRef:currentNode';
                }
                if (key === 'treeRootNodes') {
                    return '@ptRef:treeRootNodes';
                }
                if (key === 'parentNode') {
                    return '@ptRef:parentNode';
                }
                if (key === 'previousNode') {
                    return '@ptRef:previousNode';
                }
                if (key === 'currentDragNode') {
                    return '@ptRef:currentDragNode';
                }
            }
            return value;
        }, 2);
        return build;
    };
    PioneerTreeStringifyService.prototype.getRawTree = function (nodes) {
        var obj = JSON.parse(JSON.stringify(JSON.parse(this.getExpandedTree(nodes))));
        var cache = [];
        return JSON.stringify(obj, function (key, value) {
            if (value === null) {
                return;
            }
            delete value['pioneerTreeNode'];
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    return;
                }
                cache.push(value);
            }
            return value;
        }, 2);
    };
    return PioneerTreeStringifyService;
}());
exports.PioneerTreeStringifyService = PioneerTreeStringifyService;
//# sourceMappingURL=pioneer-tree-stringify.service.js.map