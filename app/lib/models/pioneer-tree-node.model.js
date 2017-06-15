import { PioneerTreeRepeater } from "./pioneer-tree-repeater.model";
var PioneerTreeNode = (function () {
    function PioneerTreeNode(pioneerTreeService) {
        this.pioneerTreeService = pioneerTreeService;
        this.generateUid();
        this.pioneerTreeRepeater = new PioneerTreeRepeater();
    }
    PioneerTreeNode.prototype.getId = function () {
        return this.uid;
    };
    PioneerTreeNode.prototype.getContentClasses = function () {
        var classes = [];
        if (this.pioneerTreeService.currentSelectedNodeId === this.getId()) {
            classes.push('pt-node-selected');
        }
        return classes;
    };
    PioneerTreeNode.prototype.generateUid = function () {
        this.uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return PioneerTreeNode;
}());
export { PioneerTreeNode };
//# sourceMappingURL=pioneer-tree-node.model.js.map