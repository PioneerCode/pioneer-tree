"use strict";
var PioneerTreeUidService = (function () {
    function PioneerTreeUidService() {
    }
    PioneerTreeUidService.prototype.getUid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    PioneerTreeUidService.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return PioneerTreeUidService;
}());
exports.PioneerTreeUidService = PioneerTreeUidService;
//# sourceMappingURL=pioneer-tree-uid.service.js.map