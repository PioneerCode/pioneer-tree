var PioneerTreeRepeater = (function () {
    function PioneerTreeRepeater() {
        this.collapsed = false;
        this.generateUid();
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
    PioneerTreeRepeater.prototype.generateUid = function () {
        this.uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return PioneerTreeRepeater;
}());
export { PioneerTreeRepeater };
//# sourceMappingURL=pioneer-tree-repeater.model.js.map