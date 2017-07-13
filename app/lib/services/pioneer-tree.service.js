"use strict";
/**
 * Shared by components that want to write messages to the message.component
 */
var PioneerTreeService = (function () {
    function PioneerTreeService() {
    }
    PioneerTreeService.prototype.getTree = function () {
        return this.tree;
    };
    PioneerTreeService.prototype.setTree = function (tree) {
        this.tree = tree;
    };
    return PioneerTreeService;
}());
exports.PioneerTreeService = PioneerTreeService;
//# sourceMappingURL=pioneer-tree.service.js.map