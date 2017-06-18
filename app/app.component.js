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
        this.dataView = "raw";
        this.name = 'Pioneer Tree';
        this.nodes = [
            {
                "name": "root-1",
                "children": [
                    {
                        "name": "child-1",
                        "children": [
                            {
                                "name": "sub-1",
                                "children": []
                            },
                            {
                                "name": "sub-2",
                                "children": []
                            }
                        ]
                    },
                    {
                        "name": "child-2"
                    }
                ]
            },
            {
                "name": "root-2",
                "children": []
            }
        ];
        this.raw = [
            {
                "name": "root-1",
                "children": [
                    {
                        "name": "child-1",
                        "children": [
                            {
                                "name": "sub-1",
                                "children": []
                            },
                            {
                                "name": "sub-2",
                                "children": []
                            }
                        ]
                    },
                    {
                        "name": "child-2"
                    }
                ]
            },
            {
                "name": "root-2",
                "children": []
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<header>\n  <div class=\"row expanded\">\n    <div class=\"large-12 columns clearfix\">\n      <div class=\"float-left\">\n        <h1>Pioneer <span>Tree</span></h1>\n      </div>\n      <div class=\"float-right\">\n        <ul class=\"menu simple\">\n          <li>\n            <a href=\"https://github.com/PioneerCode/pioneer-tree\" target=\"_blank\" title=\"Pioneer Tree\">\n              <i class=\"fa fa-github fa-2x\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</header>\n<div class=\"row\">\n  <div class=\"large-8 columns\">\n    <section class=\"data\">\n      <ul class=\"menu\">\n        <li>\n          <h2>Data</h2>\n        </li>\n        <li>\n          <a class=\"hollow button\" (click)=\"dataView = 'raw'\" [ngClass]=\"dataView === 'raw' ? 'disabled' : ''\">Raw</a>\n        </li>\n        <li>\n          <a class=\"hollow button\" (click)=\"dataView = 'bound'\" [ngClass]=\"dataView === 'bound' ? 'disabled' : ''\">Bound</a>\n        </li>\n      </ul>\n      <div *ngIf=\"dataView === 'raw'\">\n        <pre>{{raw | json}}</pre>\n      </div>\n      <div *ngIf=\"dataView === 'bound'\">\n        <pre>{{nodes | json}}</pre>\n      </div>\n    </section>\n  </div>\n  <div class=\"large-4 columns\">\n    <h2>Component</h2>\n    <ng-template #nodeTemplate let-node>\n      <div pioneer-tree-collapse [node]=\"node\">\n        {{node.name}}\n      </div>\n    </ng-template>\n    <ng-template #repeaterTemplate let-node>\n      <ul pioneer-tree-repeater [nodes]=\"node.children\">\n        <li pioneer-tree-node *ngFor=\"let node of node.children\" [nodeTemplate]=\"nodeTemplate\" [repeaterTemplate]=\"repeaterTemplate\" [node]=\"node\">\n        </li>\n      </ul>\n    </ng-template>\n    <ul pioneer-tree [nodes]=\"nodes\">\n      <li pioneer-tree-node *ngFor=\"let node of nodes\" [nodeTemplate]=\"nodeTemplate\" [repeaterTemplate]=\"repeaterTemplate\" [node]=\"node\">\n      </li>\n    </ul>\n  </div>\n</div>  \n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map