"use strict";
var PioneerTreeRepeater = (function () {
    function PioneerTreeRepeater(uidService) {
        this.uidService = uidService;
        this.collapsed = false;
        this.uid = this.uidService.getUid();
    }
    PioneerTreeRepeater.prototype.getStyles = function () {
        return {
            display: this.collapsed ? 'none' : 'block'
        };
    };
    PioneerTreeRepeater.prototype.getClasses = function () {
        var classes = [];
        if (this.collapsed) {
            classes.push('pt-repeater-collapsed');
        }
        return classes;
    };
    PioneerTreeRepeater.prototype.getId = function () {
        return this.uid;
    };
    return PioneerTreeRepeater;
}());
exports.PioneerTreeRepeater = PioneerTreeRepeater;
//# sourceMappingURL=pioneer-tree-repeater.model.js.map