"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.dataView = 'raw';
        this.name = 'Pioneer Tree';
        this.configuration = {
            childPropertyName: 'children',
            sortPropertyName: 'sort'
        };
        this.nodes = [
            {
                'name': 'root-1',
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
                'name': 'root-2',
                'sort': 1
            },
            {
                'name': 'root-3',
                'sort': 2
            }
        ];
    }
    AppComponent.prototype.getBoundDataMinusCircularReference = function () {
        var cache = [];
        return JSON.stringify(this.nodes, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    return;
                }
                cache.push(value);
            }
            return value;
        }, 2);
    };
    AppComponent.prototype.getRawData = function () {
        var obj = JSON.parse(JSON.stringify(JSON.parse(this.getBoundDataMinusCircularReference())));
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<header>\n  <div class=\"row expanded\">\n    <div class=\"large-12 columns\">\n      <div class=\"float-left\">\n        <h2>\n          <a href=\"http://pioneercode.com\" target=\"_blank\" title=\"Pioneer Code\">\n            Pioneer <span>Code</span>\n          </a>\n        </h2>\n      </div>\n      <div class=\"float-right\">\n        <ul class=\"menu simple\">\n          <li>\n            <a href=\"https://github.com/PioneerCode/pioneer-tree\" target=\"_blank\" title=\"Pioneer Tree\">\n              <i class=\"fa fa-github fa-2x\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</header>\n<section class=\"hero\">\n  <div class=\"row\">\n    <div class=\"large-12 columns\">\n      <h1>Pioneer <span>Tree</span></h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"large-8 large-push-2 columns\">\n      <p>Pioneer Tree is an Angular 4 and up tree component the aims to stay out of your way.  Giving you the freedom and tools necessary to produce dynamic tree components in markup that is defined and controlled by you.</p>\n    </div>\n  </div>\n</section>\n<section class=\"features\">\n  <div class=\"row\">\n    <div class=\"large-8 columns\">\n      <h4>Features</h4>\n      <div class=\"row\">\n        <div class=\"large-6 columns\">\n          <ul>\n            <li>\n              Intuitive Markup\n            </li>\n            <li>\n              No external dependencies\n            </li>\n            <li>\n              UMD module with SystemJS support\n            </li>\n            <li>\n              Collapsible nodes\n            </li>\n          </ul>\n        </div>\n        <div class=\"large-6 columns\">\n          <ul>\n            <li>\n              Drag & Drop\n            </li>\n            <li>\n              Sort tracking\n            </li>\n            <li>\n              Selected node tracking\n            </li>\n            <li>\n              Opt-in public state tracking\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"large-4 columns\">\n      <h4>Coming Soon!</h4>\n      <ul>\n        <li>\n          Filtering\n        </li>\n        <li>\n          Add & Delete\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n<section class=\"data\">\n  <div class=\"row\">\n    <div class=\"large-8 columns\">\n     <ul class=\"menu\">\n        <li>\n          <h2>Data</h2>\n        </li>\n        <li>\n          <a class=\"hollow button\" (click)=\"dataView = 'raw'\" [ngClass]=\"dataView === 'raw' ? 'disabled' : ''\">Raw</a>\n        </li>\n        <li>\n          <a class=\"hollow button\" (click)=\"dataView = 'bound'\" [ngClass]=\"dataView === 'bound' ? 'disabled' : ''\">Bound</a>\n        </li>\n      </ul>\n      <div *ngIf=\"dataView === 'raw'\">\n        <pre>{{getRawData()}}</pre>\n      </div>\n      <div *ngIf=\"dataView === 'bound'\">\n        <pre>{{getBoundDataMinusCircularReference()}}</pre>\n      </div>\n    </div>\n    <div class=\"large-4 columns\">\n      <h2>Component</h2>\n      <ng-template #nodeTemplate let-node>\n        <span pioneer-tree-collapse [node]=\"node\">\n          <i class=\"fa\" [ngClass]=\"this.node.pioneerTreeNode.isCollapsed() ? 'fa-folder' : 'fa-folder-open'\"></i>\n        </span>\n        <span pioneer-tree-handle [node]=\"node\">\n          {{node.name}}\n        </span>\n      </ng-template>\n      <ng-template #repeaterTemplate let-node>\n        <ul pioneer-tree-repeater [nodes]=\"node.children\" [configuration]=\"configuration\">\n          <li pioneer-tree-node *ngFor=\"let node of node.children\" [nodeTemplate]=\"nodeTemplate\" [repeaterTemplate]=\"repeaterTemplate\" [node]=\"node\">\n          </li>\n        </ul>\n      </ng-template>\n      <ul pioneer-tree [nodes]=\"nodes\" [configuration]=\"configuration\">\n        <li pioneer-tree-node *ngFor=\"let node of nodes\" [nodeTemplate]=\"nodeTemplate\" [repeaterTemplate]=\"repeaterTemplate\" [node]=\"node\">\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n<section class=\"markup\">\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <h2>HTML</h2>\n        <pre ngNonBindable>\n&lt;ng-template #nodeTemplate let-node&gt;\n  &lt;span pioneer-tree-collapse [node]=\"node\"&gt;\n    &lt;i class=\"fa\"\n      [ngClass]=\"this.node.pioneerTreeNode.isCollapsed() ? 'fa-folder' : 'fa-folder-open'\"&gt;\n    &lt;/i&gt;\n  &lt;/span&gt;\n  &lt;span pioneer-tree-handle [node]=\"node\"&gt;\n    {{node.name}}\n  &lt;/span&gt;\n&lt;/ng-template&gt;\n&lt;ng-template #repeaterTemplate let-node&gt;\n  &lt;ul pioneer-tree-repeater [nodes]=\"node.children\" [configuration]=\"configuration\"&gt;\n    &lt;li pioneer-tree-node *ngFor=\"let node of node.children\"\n      [nodeTemplate]=\"nodeTemplate\"\n      [repeaterTemplate]=\"repeaterTemplate\"\n      [node]=\"node\"&gt;\n    &lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/ng-template&gt;\n&lt;ul pioneer-tree [nodes]=\"nodes\" [configuration]=\"configuration\"&gt;\n  &lt;li pioneer-tree-node *ngFor=\"let node of nodes\"\n    [nodeTemplate]=\"nodeTemplate\"\n    [repeaterTemplate]=\"repeaterTemplate\"\n    [node]=\"node\"&gt;\n  &lt;/li&gt;\n&lt;/ul&gt;\n        </pre>\n      </div>\n    </div>\n</section>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map