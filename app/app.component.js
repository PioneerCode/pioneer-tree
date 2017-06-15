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
        this.name = 'Angular';
        this.nodes = [
            {
                "folder": {
                    "children": [
                        {
                            "folder": {
                                "children": [
                                    {
                                        "folder": {
                                            "name": "sub-1"
                                        },
                                    },
                                    {
                                        "folder": {
                                            "name": "sub-2"
                                        },
                                    },
                                    {
                                        "folder": {
                                            "name": "sub-3"
                                        },
                                    }
                                ],
                                "name": "child-1"
                            },
                            "name": "child-1"
                        },
                        {
                            "folder": {
                                "name": "child-2"
                            },
                        },
                        {
                            "folder": {
                                "name": "child-3"
                            },
                        }
                    ],
                    "name": "root-1"
                }
            },
            {
                "folder": {
                    "children": [
                        {
                            "folder": {
                                "name": "child-1"
                            },
                        },
                        {
                            "folder": {
                                "name": "child-2"
                            },
                        },
                        {
                            "folder": {
                                "name": "child-3"
                            },
                        }
                    ],
                    "name": "root-2"
                }
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "\n<div class=\"row expanded\">\n  <div class=\"large-6 columns\">\n    <h2>Tree Component</h2>\n    <div class=\"callout\">\n      <ng-template #nodeTemplate let-node>\n        <div pioneer-tree-collapse [node]=\"node\">\n          {{node.folder.name}}\n        </div>\n      </ng-template>\n      <ng-template #repeaterTemplate let-node>\n        <ul pioneer-tree-repeater [nodes]=\"node.folder.children\">\n          <li pioneer-tree-node *ngFor=\"let node of node.folder.children\" [nodeTemplate]=\"nodeTemplate\" [repeaterTemplate]=\"repeaterTemplate\" [node]=\"node\">\n          </li>\n        </ul>\n      </ng-template>\n      <ul pioneer-tree [nodes]=\"nodes\">\n        <li pioneer-tree-node *ngFor=\"let node of nodes\" [nodeTemplate]=\"nodeTemplate\" [repeaterTemplate]=\"repeaterTemplate\" [node]=\"node\">\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"large-6 columns\">\n    <h2>Raw Tree</h2>\n    <div class=\"callout\">\n      <pre>{{nodes | json}}</pre>\n    </div>\n  </div>\n</div>  \n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map