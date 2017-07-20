"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.dataView = 'raw';
        this.name = 'Pioneer Tree';
        this.events = [];
        this.configuration = {
            childPropertyName: 'children',
            sortPropertyName: 'sort',
            collapseAllOnLoad: true
        };
        this.nodes = [
            {
                'name': 'root-0',
                'sort': 0,
                'children': [
                    {
                        'name': 'child-0',
                        'sort': 0
                    },
                    {
                        'name': 'child-1',
                        'sort': 1
                    },
                    {
                        'name': 'child-2',
                        'sort': 2
                    }
                ]
            },
            {
                'name': 'root-1',
                'sort': 1
            },
            {
                'name': 'root-2',
                'sort': 2
            },
            {
                'name': 'root-3',
                'sort': 3
            }
        ];
    }
    AppComponent.prototype.onNodeDropped = function ($event) {
        this.events.unshift(new Date().toLocaleString() + ' : Node Dropped "' + $event.name + '"');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('pt'),
    __metadata("design:type", core_1.ViewChild)
], AppComponent.prototype, "ptComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"row\">\n    <div class=\"large-6 columns\">\n      <ul class=\"menu\">\n        <li>\n          <h2>Component</h2>\n        </li>\n        <li><button class=\"button tiny\" (click)=\"ptComponent.pioneerTree.expandAllNodes()\">Expand</button></li>\n        <li><button class=\"button tiny\" (click)=\"ptComponent.pioneerTree.collapseAllNodes()\">Collapse</button></li>\n      </ul>\n<ng-template #nodeTemplate let-node>\n  <ul class=\"menu content\">\n    <li>\n      <span pioneer-tree-collapse [node]=\"node\">\n        <i class=\"fa\" [ngClass]=\"this.node.pioneerTreeNode.isCollapsed() ? 'fa-folder' : 'fa-folder-open'\">\n        </i>\n      </span>\n    </li>\n    <li>\n      <span pioneer-tree-handle [node]=\"node\">\n        {{node.name}} - {{node.pioneerTreeNode.sortIndex}} :\n      </span>\n    </li>\n    <li>\n      <a title=\"Collapse All, Expand This, Set Active\" (click)=\"ptComponent.pioneerTree.collapseAllExpandThisSetActive(node)\">\n        <i class=\"fa fa-heart-o\"></i>\n      </a>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #repeaterTemplate let-node>\n  <ul pioneer-tree-repeater [nodes]=\"node.children\">\n    <li pioneer-tree-node *ngFor=\"let node of node.children\" (nodeDropped)=\"onNodeDropped($event)\" [nodeTemplate]=\"nodeTemplate\"\n      [repeaterTemplate]=\"repeaterTemplate\" [node]=\"node\">\n    </li>\n  </ul>\n</ng-template>\n<ul pioneer-tree #pt [configuration]=\"configuration\" [nodes]=\"nodes\">\n  <li pioneer-tree-node *ngFor=\"let node of nodes\" (nodeDropped)=\"onNodeDropped($event)\" [nodeTemplate]=\"nodeTemplate\" [repeaterTemplate]=\"repeaterTemplate\"\n    [node]=\"node\">\n  </li>\n</ul>\n    </div>\n    <div class=\"large-6 columns\">\n      <h2>Events</h2>\n      <div class=\"events\">\n        <ul class=\"menu vertical\">\n          <li *ngFor=\"let event of events\">\n            {{event}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"large-12 columns\">\n      <ul class=\"menu\">\n        <li>\n          <h2>Data</h2>\n        </li>\n        <li>\n          <a class=\"hollow button\" (click)=\"dataView = 'raw'\" [ngClass]=\"dataView === 'raw' ? 'disabled' : ''\">Raw</a>\n        </li>\n        <li>\n          <a class=\"hollow button\" (click)=\"dataView = 'bound'\" [ngClass]=\"dataView === 'bound' ? 'disabled' : ''\">Bound</a>\n        </li>\n      </ul>\n      <div class=\"models\">\n        <div *ngIf=\"dataView === 'raw'\">\n          <pre>{{ptComponent.pioneerTree.getRawTree()}}</pre>\n        </div>\n        <div *ngIf=\"dataView === 'bound'\">\n          <pre>{{ptComponent.pioneerTree.getExpandedTree()}}</pre>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map