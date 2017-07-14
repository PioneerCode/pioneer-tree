import { Component } from '@angular/core';
import { IPioneerTreeConfiguration } from './lib/models/pioneer-tree-configuration.model';

@Component({
  selector: 'my-app',
  template: `
<header>
  <div class="row expanded">
    <div class="large-12 columns">
      <div class="float-left">
        <h2>
          <a href="http://pioneercode.com" target="_blank" title="Pioneer Code">
            Pioneer <span>Code</span>
          </a>
        </h2>
      </div>
      <div class="float-right">
        <ul class="menu simple">
          <li>
            <a href="https://github.com/PioneerCode/pioneer-tree" target="_blank" title="Pioneer Tree">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
<section class="hero">
  <div class="row">
    <div class="large-12 columns">
      <h1>Pioneer <span>Tree</span></h1>
    </div>
  </div>
  <div class="row">
    <div class="large-8 large-push-2 columns">
      <p>Pioneer Tree is an Angular 4 and up tree component the aims to stay out of your way.  Giving you the freedom and tools necessary to produce dynamic tree components in markup that is defined and controlled by you.</p>
    </div>
  </div>
</section>
<section class="features">
  <div class="row">
    <div class="large-8 columns">
      <h4>Features</h4>
      <div class="row">
        <div class="large-6 columns">
          <ul>
            <li>
              Intuitive Markup
            </li>
            <li>
              No external dependencies
            </li>
            <li>
              UMD module with SystemJS support
            </li>
            <li>
              Collapsible nodes
            </li>
          </ul>
        </div>
        <div class="large-6 columns">
          <ul>
            <li>
              Drag & Drop
            </li>
            <li>
              Sort tracking
            </li>
            <li>
              Selected node tracking
            </li>
            <li>
              Opt-in public state tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="large-4 columns">
      <h4>Coming Soon!</h4>
      <ul>
        <li>
          Filtering
        </li>
        <li>
          Add & Delete
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="data">
  <div class="row">
    <div class="large-6 columns">
      <h2>Component</h2>
      <ng-template #nodeTemplate let-node>
        <span pioneer-tree-collapse [node]="node">
          <i class="fa"
            [ngClass]="this.node.pioneerTreeNode.isCollapsed() ? 'fa-folder' : 'fa-folder-open'">
          </i>
        </span>
        <span pioneer-tree-handle [node]="node">
          {{node.name}} - {{node.pioneerTreeNode.sortIndex}}
        </span>
      </ng-template>
      <ng-template #repeaterTemplate let-node>
        <ul pioneer-tree-repeater [nodes]="node.children">
          <li pioneer-tree-node
            *ngFor="let node of node.children"
            (nodeDropped)="onNodeDropped($event)"
            [nodeTemplate]="nodeTemplate"
            [repeaterTemplate]="repeaterTemplate" [node]="node">
          </li>
        </ul>
      </ng-template>
      <ul pioneer-tree
        [configuration]="configuration"
        [nodes]="nodes">
        <li pioneer-tree-node
            *ngFor="let node of nodes"
            (nodeDropped)="onNodeDropped($event)"
            [nodeTemplate]="nodeTemplate"
            [repeaterTemplate]="repeaterTemplate" [node]="node">
        </li>
      </ul>
      <!--<ng-template #nodeTemplate let-node>
        <div pioneer-tree-collapse [node]="node">
          <a>
            <i class="fa fa-folder"></i>
            {{ node.name }}
          </a>
        </div>
      </ng-template>
      <ng-template #repeaterTemplate let-node>
        <ul pioneer-tree-repeater [nodes]="node.folders.directories">
          <li pioneer-tree-node *ngFor="let node of node.folders.directories" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate"
            [node]="node">
          </li>
        </ul>
      </ng-template>
      <ul class="root">
        <li>
          <a href="#">
            <i class="fa fa-folder-open-o"></i> /
          </a>
          <ul pioneer-tree
            [configuration]="configuration"
            [nodes]="nodes.directories">
            <li pioneer-tree-node *ngFor="let node of nodes.directories" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate" [node]="node">
            </li>
          </ul>
        </li>
      </ul>-->
    </div>
    <div class="large-6 columns">
      <h2>Events</h2>
      <div class="events">
        <ul class="menu vertical">
          <li *ngFor="let event of events">
            {{event}}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <ul class="menu">
        <li>
          <h2>Data</h2>
        </li>
        <li>
          <a class="hollow button" (click)="dataView = 'raw'" [ngClass]="dataView === 'raw' ? 'disabled' : ''">Raw</a>
        </li>
        <li>
          <a class="hollow button" (click)="dataView = 'bound'" [ngClass]="dataView === 'bound' ? 'disabled' : ''">Bound</a>
        </li>
      </ul>
      <div class="models">
        <div *ngIf="dataView === 'raw'">
          <pre>{{getRawData()}}</pre>
        </div>
        <div *ngIf="dataView === 'bound'">
          <pre>{{getBoundDataMinusCircularReference()}}</pre>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="markup">
    <div class="row">
      <div class="large-12 columns">
        <h2>HTML</h2>
        <pre ngNonBindable>
&#x3C;ng-template #nodeTemplate let-node&#x3E;
  &#x3C;span pioneer-tree-collapse [node]=&#x22;node&#x22;&#x3E;
    &#x3C;i class=&#x22;fa&#x22;
      [ngClass]=&#x22;this.node.pioneerTreeNode.isCollapsed() ? &#x27;fa-folder&#x27; : &#x27;fa-folder-open&#x27;&#x22;&#x3E;
    &#x3C;/i&#x3E;
  &#x3C;/span&#x3E;
  &#x3C;span pioneer-tree-handle [node]=&#x22;node&#x22;&#x3E;
    {{node.name}}
  &#x3C;/span&#x3E;
&#x3C;/ng-template&#x3E;
&#x3C;ng-template #repeaterTemplate let-node&#x3E;
  &#x3C;ul pioneer-tree-repeater [nodes]=&#x22;node.children&#x22; [configuration]=&#x22;configuration&#x22;&#x3E;
    &#x3C;li pioneer-tree-node
      *ngFor=&#x22;let node of node.children&#x22;
      (nodeDropped)=&#x22;onNodeDropped($event)&#x22;
      [nodeTemplate]=&#x22;nodeTemplate&#x22;
      [repeaterTemplate]=&#x22;repeaterTemplate&#x22; [node]=&#x22;node&#x22;&#x3E;
    &#x3C;/li&#x3E;
  &#x3C;/ul&#x3E;
&#x3C;/ng-template&#x3E;
&#x3C;ul pioneer-tree
  [nodes]=&#x22;nodes&#x22;
  [configuration]=&#x22;configuration&#x22;&#x3E;
  &#x3C;li pioneer-tree-node
      *ngFor=&#x22;let node of nodes&#x22;
      (nodeDropped)=&#x22;onNodeDropped($event)&#x22;
      [nodeTemplate]=&#x22;nodeTemplate&#x22;
      [repeaterTemplate]=&#x22;repeaterTemplate&#x22; [node]=&#x22;node&#x22;&#x3E;
  &#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
        </pre>
      </div>
    </div>
</section>
`
})
export class AppComponent {
  dataView = 'raw';
  name = 'Pioneer Tree';
  events = [] as string[];
  configuration = {
    childPropertyName: 'children',
    sortPropertyName: 'sort'
  } as IPioneerTreeConfiguration;
  nodes = [
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
  ] as any;

  // nodes = {
  //   "directories": [
  //     {
  //       "folders": {
  //         "directories": [
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "ding.mp3",
  //                   "size": "23 KB",
  //                   "accessed": "2017-07-13T11:13:35.6630021-05:00",
  //                   "extension": ".mp3",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\audio",
  //                   "virtualPath": "/deps/audio",
  //                   "type": "other"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\audio"
  //             },
  //             "name": "audio",
  //             "accessed": "2017-07-13T11:13:35.6630021-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\audio",
  //             "open": false,
  //             "parents": [
  //               "deps"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "datetime.js",
  //                         "size": "29 KB",
  //                         "accessed": "2017-07-13T11:13:35.6699527-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angular-datetime",
  //                         "virtualPath": "/deps/directives/angular-datetime",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angular-datetime"
  //                   },
  //                   "name": "angular-datetime",
  //                   "accessed": "2017-07-13T11:13:35.6699527-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angular-datetime",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "angular-tooltips.js",
  //                         "size": "27 KB",
  //                         "accessed": "2017-07-13T11:13:35.6777863-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angular-tooltips",
  //                         "virtualPath": "/deps/directives/angular-tooltips",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "angular-tooltips.min.js",
  //                         "size": "8 KB",
  //                         "accessed": "2017-07-13T11:13:35.6935638-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angular-tooltips",
  //                         "virtualPath": "/deps/directives/angular-tooltips",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angular-tooltips"
  //                   },
  //                   "name": "angular-tooltips",
  //                   "accessed": "2017-07-13T11:13:35.6935638-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angular-tooltips",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "angular-datepicker.min.js",
  //                         "size": "13 KB",
  //                         "accessed": "2017-07-13T11:13:35.7175572-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angularjs-datepicker",
  //                         "virtualPath": "/deps/directives/angularjs-datepicker",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angularjs-datepicker"
  //                   },
  //                   "name": "angularjs-datepicker",
  //                   "accessed": "2017-07-13T11:13:35.7175572-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\angularjs-datepicker",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "ng-file-upload.js",
  //                         "size": "81 KB",
  //                         "accessed": "2017-07-13T11:13:35.7560936-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-file-upload",
  //                         "virtualPath": "/deps/directives/ng-file-upload",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "ng-file-upload.min.js",
  //                         "size": "36 KB",
  //                         "accessed": "2017-07-13T11:13:35.7801084-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-file-upload",
  //                         "virtualPath": "/deps/directives/ng-file-upload",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-file-upload"
  //                   },
  //                   "name": "ng-file-upload",
  //                   "accessed": "2017-07-13T11:13:35.7801084-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-file-upload",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "ng-table.js",
  //                         "size": "29 KB",
  //                         "accessed": "2017-07-13T11:13:35.8266536-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-table",
  //                         "virtualPath": "/deps/directives/ng-table",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "ng-table.min.js",
  //                         "size": "11 KB",
  //                         "accessed": "2017-07-13T11:13:35.8345993-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-table",
  //                         "virtualPath": "/deps/directives/ng-table",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-table"
  //                   },
  //                   "name": "ng-table",
  //                   "accessed": "2017-07-13T11:13:35.8345993-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\ng-table",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-equalizer.js",
  //                         "size": "475 B",
  //                         "accessed": "2017-07-13T11:13:35.8345993-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-equalizer",
  //                         "virtualPath": "/deps/directives/pbi-equalizer",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-equalizer"
  //                   },
  //                   "name": "pbi-equalizer",
  //                   "accessed": "2017-07-13T11:13:35.8345993-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-equalizer",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-phone.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T11:13:35.842673-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-phone",
  //                         "virtualPath": "/deps/directives/pbi-phone",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-phone"
  //                   },
  //                   "name": "pbi-phone",
  //                   "accessed": "2017-07-13T11:13:35.842673-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-phone",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-ssn.js",
  //                         "size": "1 KB",
  //                         "accessed": "2017-07-13T11:13:35.8606798-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-ssn",
  //                         "virtualPath": "/deps/directives/pbi-ssn",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-ssn"
  //                   },
  //                   "name": "pbi-ssn",
  //                   "accessed": "2017-07-13T11:13:35.8606798-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives\\pbi-ssn",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "directives"
  //                   ]
  //                 }
  //               ],
  //               "files": [

  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives"
  //             },
  //             "name": "directives",
  //             "accessed": "2017-07-13T11:13:35.8596921-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\directives",
  //             "open": false,
  //             "parents": [
  //               "deps"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-ext-modal-dive.html",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T11:13:35.6699527-05:00",
  //                         "extension": ".html",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-modal-dive",
  //                         "virtualPath": "/deps/extensions/pbi-ext-modal-dive",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "pbi-ext-modal-dive.js",
  //                         "size": "5 KB",
  //                         "accessed": "2017-07-13T11:31:01.8151745-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-modal-dive",
  //                         "virtualPath": "/deps/extensions/pbi-ext-modal-dive",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-modal-dive"
  //                   },
  //                   "name": "pbi-ext-modal-dive",
  //                   "accessed": "2017-07-13T11:31:01.8151745-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-modal-dive",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "extensions"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-ext-parameter-builder.html",
  //                         "size": "1 KB",
  //                         "accessed": "2017-07-13T11:13:35.6777863-05:00",
  //                         "extension": ".html",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-parameter-builder",
  //                         "virtualPath": "/deps/extensions/pbi-ext-parameter-builder",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "pbi-ext-parameter-builder.js",
  //                         "size": "10 KB",
  //                         "accessed": "2017-07-13T11:31:01.8211767-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-parameter-builder",
  //                         "virtualPath": "/deps/extensions/pbi-ext-parameter-builder",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-parameter-builder"
  //                   },
  //                   "name": "pbi-ext-parameter-builder",
  //                   "accessed": "2017-07-13T11:31:01.8211767-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-parameter-builder",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "extensions"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-ext-print-widget.html",
  //                         "size": "47 B",
  //                         "accessed": "2017-07-13T11:13:35.6935638-05:00",
  //                         "extension": ".html",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-print-widget",
  //                         "virtualPath": "/deps/extensions/pbi-ext-print-widget",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "pbi-ext-print-widget.js",
  //                         "size": "656 B",
  //                         "accessed": "2017-07-13T11:31:01.842706-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-print-widget",
  //                         "virtualPath": "/deps/extensions/pbi-ext-print-widget",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-print-widget"
  //                   },
  //                   "name": "pbi-ext-print-widget",
  //                   "accessed": "2017-07-13T11:31:01.842706-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions\\pbi-ext-print-widget",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "extensions"
  //                   ]
  //                 }
  //               ],
  //               "files": [

  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions"
  //             },
  //             "name": "extensions",
  //             "accessed": "2017-07-13T11:13:35.6935638-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\extensions",
  //             "open": false,
  //             "parents": [
  //               "deps"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "utc-to-local.filter.js",
  //                         "size": "996 B",
  //                         "accessed": "2017-07-13T11:31:01.7641302-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\filters\\utc-to-local",
  //                         "virtualPath": "/deps/filters/utc-to-local",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\filters\\utc-to-local"
  //                   },
  //                   "name": "utc-to-local",
  //                   "accessed": "2017-07-13T11:31:01.7641302-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\filters\\utc-to-local",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "filters"
  //                   ]
  //                 }
  //               ],
  //               "files": [

  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\filters"
  //             },
  //             "name": "filters",
  //             "accessed": "2017-07-13T11:31:01.7641302-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\filters",
  //             "open": false,
  //             "parents": [
  //               "deps"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "fontawesome-webfont.eot",
  //                   "size": "161 KB",
  //                   "accessed": "2017-07-13T11:13:35.6630021-05:00",
  //                   "extension": ".eot",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts",
  //                   "virtualPath": "/deps/fonts",
  //                   "type": "other"
  //                 },
  //                 {
  //                   "name": "fontawesome-webfont.svg",
  //                   "size": "436 KB",
  //                   "accessed": "2017-07-13T11:13:35.6699527-05:00",
  //                   "extension": ".svg",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts",
  //                   "virtualPath": "/deps/fonts",
  //                   "type": "other"
  //                 },
  //                 {
  //                   "name": "fontawesome-webfont.ttf",
  //                   "size": "161 KB",
  //                   "accessed": "2017-07-13T11:13:35.6777863-05:00",
  //                   "extension": ".ttf",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts",
  //                   "virtualPath": "/deps/fonts",
  //                   "type": "other"
  //                 },
  //                 {
  //                   "name": "fontawesome-webfont.woff",
  //                   "size": "95 KB",
  //                   "accessed": "2017-07-13T11:13:35.6935638-05:00",
  //                   "extension": ".woff",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts",
  //                   "virtualPath": "/deps/fonts",
  //                   "type": "other"
  //                 },
  //                 {
  //                   "name": "fontawesome-webfont.woff2",
  //                   "size": "75 KB",
  //                   "accessed": "2017-07-13T11:13:35.7330644-05:00",
  //                   "extension": ".woff2",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts",
  //                   "virtualPath": "/deps/fonts",
  //                   "type": "other"
  //                 },
  //                 {
  //                   "name": "FontAwesome.otf",
  //                   "size": "131 KB",
  //                   "accessed": "2017-07-13T11:13:35.7560936-05:00",
  //                   "extension": ".otf",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts",
  //                   "virtualPath": "/deps/fonts",
  //                   "type": "other"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts"
  //             },
  //             "name": "fonts",
  //             "accessed": "2017-07-13T11:13:35.7560936-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\fonts",
  //             "open": false,
  //             "parents": [
  //               "deps"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "icon-map-blue.png",
  //                               "size": "836 B",
  //                               "accessed": "2017-07-13T11:13:35.7951233-05:00",
  //                               "extension": ".png",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images\\police\\police-calls-queued-dispatched",
  //                               "virtualPath": "/deps/images/police/police-calls-queued-dispatched",
  //                               "type": "image"
  //                             },
  //                             {
  //                               "name": "icon-map-red.png",
  //                               "size": "996 B",
  //                               "accessed": "2017-07-13T11:13:35.8266536-05:00",
  //                               "extension": ".png",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images\\police\\police-calls-queued-dispatched",
  //                               "virtualPath": "/deps/images/police/police-calls-queued-dispatched",
  //                               "type": "image"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images\\police\\police-calls-queued-dispatched"
  //                         },
  //                         "name": "police-calls-queued-dispatched",
  //                         "accessed": "2017-07-13T11:13:35.8266536-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images\\police\\police-calls-queued-dispatched",
  //                         "open": false,
  //                         "parents": [
  //                           "deps",
  //                           "images",
  //                           "police"
  //                         ]
  //                       }
  //                     ],
  //                     "files": [

  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images\\police"
  //                   },
  //                   "name": "police",
  //                   "accessed": "2017-07-13T11:13:35.7871272-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images\\police",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "images"
  //                   ]
  //                 }
  //               ],
  //               "files": [
  //                 {
  //                   "name": "loader.gif",
  //                   "size": "17 KB",
  //                   "accessed": "2017-07-13T11:13:35.6699527-05:00",
  //                   "extension": ".gif",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images",
  //                   "virtualPath": "/deps/images",
  //                   "type": "image"
  //                 },
  //                 {
  //                   "name": "logo-large.jpg",
  //                   "size": "44 KB",
  //                   "accessed": "2017-07-13T11:13:35.6935638-05:00",
  //                   "extension": ".jpg",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images",
  //                   "virtualPath": "/deps/images",
  //                   "type": "image"
  //                 },
  //                 {
  //                   "name": "logo-small.jpg",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:35.7330644-05:00",
  //                   "extension": ".jpg",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images",
  //                   "virtualPath": "/deps/images",
  //                   "type": "image"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images"
  //             },
  //             "name": "images",
  //             "accessed": "2017-07-13T11:13:35.7560936-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\images",
  //             "open": false,
  //             "parents": [
  //               "deps"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-ui-loader.js",
  //                         "size": "999 B",
  //                         "accessed": "2017-07-13T11:31:01.7721364-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-loader",
  //                         "virtualPath": "/deps/ui/pbi-ui-loader",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-loader"
  //                   },
  //                   "name": "pbi-ui-loader",
  //                   "accessed": "2017-07-13T11:31:01.7721364-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-loader",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "ui"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-ui-modal.js",
  //                         "size": "3 KB",
  //                         "accessed": "2017-07-13T11:31:01.7800191-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-modal",
  //                         "virtualPath": "/deps/ui/pbi-ui-modal",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-modal"
  //                   },
  //                   "name": "pbi-ui-modal",
  //                   "accessed": "2017-07-13T11:31:01.7800191-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-modal",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "ui"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "pbi-ui-pop-out.js",
  //                         "size": "1 KB",
  //                         "accessed": "2017-07-13T11:31:01.8036604-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-pop-out",
  //                         "virtualPath": "/deps/ui/pbi-ui-pop-out",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-pop-out"
  //                   },
  //                   "name": "pbi-ui-pop-out",
  //                   "accessed": "2017-07-13T11:31:01.8036604-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui\\pbi-ui-pop-out",
  //                   "open": false,
  //                   "parents": [
  //                     "deps",
  //                     "ui"
  //                   ]
  //                 }
  //               ],
  //               "files": [

  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui"
  //             },
  //             "name": "ui",
  //             "accessed": "2017-07-13T11:31:01.8036604-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps\\ui",
  //             "open": false,
  //             "parents": [
  //               "deps"
  //             ]
  //           }
  //         ],
  //         "files": [
  //           {
  //             "name": "app.css",
  //             "size": "168 KB",
  //             "accessed": "2017-07-13T11:13:35.4905636-05:00",
  //             "extension": ".css",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "editable"
  //           },
  //           {
  //             "name": "app.js",
  //             "size": "1 KB",
  //             "accessed": "2017-07-13T11:13:38.7328204-05:00",
  //             "extension": ".js",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "editable"
  //           },
  //           {
  //             "name": "app.js.map",
  //             "size": "452 KB",
  //             "accessed": "2017-07-13T11:13:38.7328204-05:00",
  //             "extension": ".map",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "other"
  //           },
  //           {
  //             "name": "libs.js",
  //             "size": "587 KB",
  //             "accessed": "2017-07-13T11:13:38.7949406-05:00",
  //             "extension": ".js",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "editable"
  //           },
  //           {
  //             "name": "meta.json",
  //             "size": "30 B",
  //             "accessed": "2017-07-13T11:13:35.6630021-05:00",
  //             "extension": ".json",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "editable"
  //           },
  //           {
  //             "name": "red-light-app.css",
  //             "size": "3 KB",
  //             "accessed": "2017-07-13T13:58:26.1797109-05:00",
  //             "extension": ".css",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "editable"
  //           },
  //           {
  //             "name": "xed-app.css",
  //             "size": "18 KB",
  //             "accessed": "2017-07-13T11:17:25.8887612-05:00",
  //             "extension": ".css",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "editable"
  //           },
  //           {
  //             "name": "xed-app.js",
  //             "size": "168 KB",
  //             "accessed": "2017-07-13T11:17:29.537973-05:00",
  //             "extension": ".js",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "editable"
  //           },
  //           {
  //             "name": "xed-app.js.map",
  //             "size": "447 KB",
  //             "accessed": "2017-07-13T11:17:29.537973-05:00",
  //             "extension": ".map",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //             "virtualPath": "/deps",
  //             "type": "other"
  //           }
  //         ],
  //         "path": "C:\\source\\pbi-app\\app\\pbi\\deps"
  //       },
  //       "name": "deps",
  //       "accessed": "2017-07-13T13:58:26.1797109-05:00",
  //       "path": "C:\\source\\pbi-app\\app\\pbi\\deps",
  //       "open": false,
  //       "parents": [

  //       ]
  //     },
  //     {
  //       "folders": {
  //         "directories": [

  //         ],
  //         "files": [
  //           {
  //             "name": "fontawesome-webfont.eot",
  //             "size": "161 KB",
  //             "accessed": "2017-07-13T11:13:35.6630021-05:00",
  //             "extension": ".eot",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\fonts",
  //             "virtualPath": "/fonts",
  //             "type": "other"
  //           },
  //           {
  //             "name": "fontawesome-webfont.svg",
  //             "size": "436 KB",
  //             "accessed": "2017-07-13T11:13:35.6699527-05:00",
  //             "extension": ".svg",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\fonts",
  //             "virtualPath": "/fonts",
  //             "type": "other"
  //           },
  //           {
  //             "name": "fontawesome-webfont.ttf",
  //             "size": "161 KB",
  //             "accessed": "2017-07-13T11:13:35.6857328-05:00",
  //             "extension": ".ttf",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\fonts",
  //             "virtualPath": "/fonts",
  //             "type": "other"
  //           },
  //           {
  //             "name": "fontawesome-webfont.woff",
  //             "size": "95 KB",
  //             "accessed": "2017-07-13T11:13:35.7330644-05:00",
  //             "extension": ".woff",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\fonts",
  //             "virtualPath": "/fonts",
  //             "type": "other"
  //           },
  //           {
  //             "name": "fontawesome-webfont.woff2",
  //             "size": "75 KB",
  //             "accessed": "2017-07-13T11:13:35.7480777-05:00",
  //             "extension": ".woff2",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\fonts",
  //             "virtualPath": "/fonts",
  //             "type": "other"
  //           },
  //           {
  //             "name": "FontAwesome.otf",
  //             "size": "131 KB",
  //             "accessed": "2017-07-13T11:13:35.7560936-05:00",
  //             "extension": ".otf",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\fonts",
  //             "virtualPath": "/fonts",
  //             "type": "other"
  //           }
  //         ],
  //         "path": "C:\\source\\pbi-app\\app\\pbi\\fonts"
  //       },
  //       "name": "fonts",
  //       "accessed": "2017-07-13T11:13:35.7560936-05:00",
  //       "path": "C:\\source\\pbi-app\\app\\pbi\\fonts",
  //       "open": false,
  //       "parents": [

  //       ]
  //     },
  //     {
  //       "folders": {
  //         "directories": [
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "kpi-evaluate-repository.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:31:01.8507347-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\sde",
  //                   "virtualPath": "/repositories/sde",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "kpi-results-repository.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:31:01.8577378-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\sde",
  //                   "virtualPath": "/repositories/sde",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "kpi-table-results-repository.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:31:01.865756-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\sde",
  //                   "virtualPath": "/repositories/sde",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "kpi-variables-repository.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:31:01.896773-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\sde",
  //                   "virtualPath": "/repositories/sde",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "user-messages-repository.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:31:01.9047125-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\sde",
  //                   "virtualPath": "/repositories/sde",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\sde"
  //             },
  //             "name": "sde",
  //             "accessed": "2017-07-13T11:31:01.9047125-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\sde",
  //             "open": false,
  //             "parents": [
  //               "repositories"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "agencies.js",
  //                         "size": "5 KB",
  //                         "accessed": "2017-07-13T11:31:04.3911988-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api",
  //                         "virtualPath": "/repositories/xed/api",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "agency-restricted-incident-type.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T11:31:04.3943233-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api",
  //                         "virtualPath": "/repositories/xed/api",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "agency-transfer-disposition.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T11:31:04.3986955-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api",
  //                         "virtualPath": "/repositories/xed/api",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "configuration.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T11:31:04.4006578-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api",
  //                         "virtualPath": "/repositories/xed/api",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "district-attorney.js",
  //                         "size": "1 KB",
  //                         "accessed": "2017-07-13T11:31:04.4057993-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api",
  //                         "virtualPath": "/repositories/xed/api",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "services.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T11:31:04.4057993-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api",
  //                         "virtualPath": "/repositories/xed/api",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api"
  //                   },
  //                   "name": "api",
  //                   "accessed": "2017-07-13T11:31:04.4057993-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\api",
  //                   "open": false,
  //                   "parents": [
  //                     "repositories",
  //                     "xed"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "cases.js",
  //                         "size": "21 KB",
  //                         "accessed": "2017-07-13T11:31:04.4057993-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\cases",
  //                         "virtualPath": "/repositories/xed/cases",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "ICaseRepository.js",
  //                         "size": "1 B",
  //                         "accessed": "2017-07-13T11:31:04.4123792-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\cases",
  //                         "virtualPath": "/repositories/xed/cases",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "lookups.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T11:31:04.4123792-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\cases",
  //                         "virtualPath": "/repositories/xed/cases",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\cases"
  //                   },
  //                   "name": "cases",
  //                   "accessed": "2017-07-13T11:31:04.4123792-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed\\cases",
  //                   "open": false,
  //                   "parents": [
  //                     "repositories",
  //                     "xed"
  //                   ]
  //                 }
  //               ],
  //               "files": [

  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed"
  //             },
  //             "name": "xed",
  //             "accessed": "2017-07-13T11:31:04.4057993-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\repositories\\xed",
  //             "open": false,
  //             "parents": [
  //               "repositories"
  //             ]
  //           }
  //         ],
  //         "files": [

  //         ],
  //         "path": "C:\\source\\pbi-app\\app\\pbi\\repositories"
  //       },
  //       "name": "repositories",
  //       "accessed": "2017-07-13T11:31:04.3811401-05:00",
  //       "path": "C:\\source\\pbi-app\\app\\pbi\\repositories",
  //       "open": false,
  //       "parents": [

  //       ]
  //     },
  //     {
  //       "folders": {
  //         "directories": [
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "313 B",
  //                   "accessed": "2017-07-13T11:31:02.2020751-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-area-chart",
  //                   "virtualPath": "/widgets/pbi-area-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-area-chart.html",
  //                   "size": "308 B",
  //                   "accessed": "2017-07-13T11:13:38.7406328-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-area-chart",
  //                   "virtualPath": "/widgets/pbi-area-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-area-chart.js",
  //                   "size": "16 KB",
  //                   "accessed": "2017-07-13T11:31:02.2165839-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-area-chart",
  //                   "virtualPath": "/widgets/pbi-area-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-area-chart.service.js",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:31:02.2235885-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-area-chart",
  //                   "virtualPath": "/widgets/pbi-area-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "12 KB",
  //                   "accessed": "2017-07-13T11:13:35.5371866-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-area-chart",
  //                   "virtualPath": "/widgets/pbi-area-chart",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-area-chart"
  //             },
  //             "name": "pbi-area-chart",
  //             "accessed": "2017-07-13T11:31:02.2235885-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-area-chart",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "308 B",
  //                   "accessed": "2017-07-13T11:31:02.228098-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-bar-chart.html",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:13:38.7484515-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-bar-chart.js",
  //                   "size": "8 KB",
  //                   "accessed": "2017-07-13T11:31:02.2310975-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-bar-chart.service.horizontal.js",
  //                   "size": "17 KB",
  //                   "accessed": "2017-07-13T11:31:02.2331025-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-bar-chart.service.js",
  //                   "size": "5 KB",
  //                   "accessed": "2017-07-13T11:31:02.2331025-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-bar-chart.service.tip.js",
  //                   "size": "4 KB",
  //                   "accessed": "2017-07-13T11:31:02.2411163-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-bar-chart.service.vertical.js",
  //                   "size": "18 KB",
  //                   "accessed": "2017-07-13T11:31:02.2411163-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "12 KB",
  //                   "accessed": "2017-07-13T11:13:35.5768064-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //                   "virtualPath": "/widgets/pbi-bar-chart",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart"
  //             },
  //             "name": "pbi-bar-chart",
  //             "accessed": "2017-07-13T11:31:02.2411163-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-bar-chart",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "333 B",
  //                   "accessed": "2017-07-13T11:31:02.2490319-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-circular-chart",
  //                   "virtualPath": "/widgets/pbi-circular-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-circular-chart.html",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:38.7484515-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-circular-chart",
  //                   "virtualPath": "/widgets/pbi-circular-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-circular-chart.js",
  //                   "size": "18 KB",
  //                   "accessed": "2017-07-13T11:31:02.2561228-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-circular-chart",
  //                   "virtualPath": "/widgets/pbi-circular-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "14 KB",
  //                   "accessed": "2017-07-13T11:13:35.5846308-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-circular-chart",
  //                   "virtualPath": "/widgets/pbi-circular-chart",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-circular-chart"
  //             },
  //             "name": "pbi-circular-chart",
  //             "accessed": "2017-07-13T11:31:02.2561228-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-circular-chart",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "pbi-data-table.html",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:13:38.7484515-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table",
  //                   "virtualPath": "/widgets/pbi-data-table",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-data-table.js",
  //                   "size": "7 KB",
  //                   "accessed": "2017-07-13T11:31:02.2561228-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table",
  //                   "virtualPath": "/widgets/pbi-data-table",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "10 KB",
  //                   "accessed": "2017-07-13T11:13:35.5924459-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table",
  //                   "virtualPath": "/widgets/pbi-data-table",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table"
  //             },
  //             "name": "pbi-data-table",
  //             "accessed": "2017-07-13T11:31:02.2561228-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "333 B",
  //                   "accessed": "2017-07-13T11:31:02.2561228-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table-dive",
  //                   "virtualPath": "/widgets/pbi-data-table-dive",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-data-table-dive.html",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:13:38.7484515-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table-dive",
  //                   "virtualPath": "/widgets/pbi-data-table-dive",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-data-table-dive.js",
  //                   "size": "9 KB",
  //                   "accessed": "2017-07-13T11:31:02.2561228-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table-dive",
  //                   "virtualPath": "/widgets/pbi-data-table-dive",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "9 KB",
  //                   "accessed": "2017-07-13T11:13:35.6002762-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table-dive",
  //                   "virtualPath": "/widgets/pbi-data-table-dive",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table-dive"
  //             },
  //             "name": "pbi-data-table-dive",
  //             "accessed": "2017-07-13T11:31:02.2561228-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-data-table-dive",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "318 B",
  //                   "accessed": "2017-07-13T11:31:02.2719994-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-datasource",
  //                   "virtualPath": "/widgets/pbi-datasource",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-datasource.js",
  //                   "size": "3 KB",
  //                   "accessed": "2017-07-13T11:31:02.2798837-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-datasource",
  //                   "virtualPath": "/widgets/pbi-datasource",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "851 B",
  //                   "accessed": "2017-07-13T11:13:35.6159462-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-datasource",
  //                   "virtualPath": "/widgets/pbi-datasource",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-datasource"
  //             },
  //             "name": "pbi-datasource",
  //             "accessed": "2017-07-13T11:31:02.2798837-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-datasource",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "328 B",
  //                   "accessed": "2017-07-13T11:31:02.2876991-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-density-graph",
  //                   "virtualPath": "/widgets/pbi-density-graph",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-density-graph.html",
  //                   "size": "296 B",
  //                   "accessed": "2017-07-13T11:13:38.7484515-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-density-graph",
  //                   "virtualPath": "/widgets/pbi-density-graph",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-density-graph.js",
  //                   "size": "18 KB",
  //                   "accessed": "2017-07-13T11:31:02.3034019-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-density-graph",
  //                   "virtualPath": "/widgets/pbi-density-graph",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:13:35.6238169-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-density-graph",
  //                   "virtualPath": "/widgets/pbi-density-graph",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-density-graph"
  //             },
  //             "name": "pbi-density-graph",
  //             "accessed": "2017-07-13T11:31:02.3034019-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-density-graph",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "event-drop.js",
  //                         "size": "14 KB",
  //                         "accessed": "2017-07-13T11:31:01.9443229-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop\\deps",
  //                         "virtualPath": "/widgets/pbi-event-drop/deps",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "event-drop.min.js",
  //                         "size": "7 KB",
  //                         "accessed": "2017-07-13T11:31:02.0764147-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop\\deps",
  //                         "virtualPath": "/widgets/pbi-event-drop/deps",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop\\deps"
  //                   },
  //                   "name": "deps",
  //                   "accessed": "2017-07-13T11:31:02.0764147-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop\\deps",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "pbi-event-drop"
  //                   ]
  //                 }
  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "412 B",
  //                   "accessed": "2017-07-13T11:31:02.3271991-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop",
  //                   "virtualPath": "/widgets/pbi-event-drop",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-event-drop.html",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:38.7562662-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop",
  //                   "virtualPath": "/widgets/pbi-event-drop",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-event-drop.js",
  //                   "size": "17 KB",
  //                   "accessed": "2017-07-13T11:31:02.3271991-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop",
  //                   "virtualPath": "/widgets/pbi-event-drop",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "10 KB",
  //                   "accessed": "2017-07-13T11:13:35.6238169-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop",
  //                   "virtualPath": "/widgets/pbi-event-drop",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop"
  //             },
  //             "name": "pbi-event-drop",
  //             "accessed": "2017-07-13T11:31:02.3271991-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-event-drop",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "pbi-god.html",
  //                   "size": "124 B",
  //                   "accessed": "2017-07-13T11:13:38.7562662-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-god",
  //                   "virtualPath": "/widgets/pbi-god",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-god.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:31:02.3342752-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-god",
  //                   "virtualPath": "/widgets/pbi-god",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "707 B",
  //                   "accessed": "2017-07-13T11:13:35.6308408-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-god",
  //                   "virtualPath": "/widgets/pbi-god",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-god"
  //             },
  //             "name": "pbi-god",
  //             "accessed": "2017-07-13T11:31:02.3342752-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-god",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "338 B",
  //                   "accessed": "2017-07-13T11:31:02.3342752-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-google-calendar",
  //                   "virtualPath": "/widgets/pbi-google-calendar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-google-calendar.html",
  //                   "size": "604 B",
  //                   "accessed": "2017-07-13T11:13:38.7562662-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-google-calendar",
  //                   "virtualPath": "/widgets/pbi-google-calendar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-google-calendar.js",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:31:02.3342752-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-google-calendar",
  //                   "virtualPath": "/widgets/pbi-google-calendar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:35.6308408-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-google-calendar",
  //                   "virtualPath": "/widgets/pbi-google-calendar",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-google-calendar"
  //             },
  //             "name": "pbi-google-calendar",
  //             "accessed": "2017-07-13T11:31:02.3342752-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-google-calendar",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "298 B",
  //                   "accessed": "2017-07-13T11:31:02.3421761-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bar",
  //                   "virtualPath": "/widgets/pbi-kpi-bar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-kpi-bar.html",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:38.7562662-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bar",
  //                   "virtualPath": "/widgets/pbi-kpi-bar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-kpi-bar.js",
  //                   "size": "10 KB",
  //                   "accessed": "2017-07-13T11:31:02.3578505-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bar",
  //                   "virtualPath": "/widgets/pbi-kpi-bar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "14 KB",
  //                   "accessed": "2017-07-13T11:13:35.6308408-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bar",
  //                   "virtualPath": "/widgets/pbi-kpi-bar",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bar"
  //             },
  //             "name": "pbi-kpi-bar",
  //             "accessed": "2017-07-13T11:31:02.3578505-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bar",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "313 B",
  //                   "accessed": "2017-07-13T11:31:02.3657227-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bubble",
  //                   "virtualPath": "/widgets/pbi-kpi-bubble",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-kpi-bubble.html",
  //                   "size": "996 B",
  //                   "accessed": "2017-07-13T11:13:38.7640926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bubble",
  //                   "virtualPath": "/widgets/pbi-kpi-bubble",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-kpi-bubble.js",
  //                   "size": "11 KB",
  //                   "accessed": "2017-07-13T11:31:02.3657227-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bubble",
  //                   "virtualPath": "/widgets/pbi-kpi-bubble",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "12 KB",
  //                   "accessed": "2017-07-13T11:13:35.6308408-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bubble",
  //                   "virtualPath": "/widgets/pbi-kpi-bubble",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bubble"
  //             },
  //             "name": "pbi-kpi-bubble",
  //             "accessed": "2017-07-13T11:31:02.3657227-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-bubble",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "308 B",
  //                   "accessed": "2017-07-13T11:31:02.3742345-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-spark",
  //                   "virtualPath": "/widgets/pbi-kpi-spark",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-kpi-spark.html",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:38.7640926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-spark",
  //                   "virtualPath": "/widgets/pbi-kpi-spark",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-kpi-spark.js",
  //                   "size": "9 KB",
  //                   "accessed": "2017-07-13T11:31:02.3892601-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-spark",
  //                   "virtualPath": "/widgets/pbi-kpi-spark",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "12 KB",
  //                   "accessed": "2017-07-13T11:13:35.6308408-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-spark",
  //                   "virtualPath": "/widgets/pbi-kpi-spark",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-spark"
  //             },
  //             "name": "pbi-kpi-spark",
  //             "accessed": "2017-07-13T11:31:02.3892601-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-kpi-spark",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "313 B",
  //                   "accessed": "2017-07-13T11:31:02.3971831-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart",
  //                   "virtualPath": "/widgets/pbi-line-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-line-chart.html",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:38.7640926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart",
  //                   "virtualPath": "/widgets/pbi-line-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-line-chart.js",
  //                   "size": "3 KB",
  //                   "accessed": "2017-07-13T11:31:02.3971831-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart",
  //                   "virtualPath": "/widgets/pbi-line-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-line-chart.service.chart.js",
  //                   "size": "9 KB",
  //                   "accessed": "2017-07-13T11:31:02.4132734-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart",
  //                   "virtualPath": "/widgets/pbi-line-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-line-chart.service.js",
  //                   "size": "7 KB",
  //                   "accessed": "2017-07-13T11:31:02.4282871-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart",
  //                   "virtualPath": "/widgets/pbi-line-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "10 KB",
  //                   "accessed": "2017-07-13T11:13:35.6308408-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart",
  //                   "virtualPath": "/widgets/pbi-line-chart",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart"
  //             },
  //             "name": "pbi-line-chart",
  //             "accessed": "2017-07-13T11:31:02.4282871-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-line-chart",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "308 B",
  //                   "accessed": "2017-07-13T11:31:02.4282871-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-org-chart",
  //                   "virtualPath": "/widgets/pbi-org-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-org-chart.html",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:38.7640926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-org-chart",
  //                   "virtualPath": "/widgets/pbi-org-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-org-chart.js",
  //                   "size": "24 KB",
  //                   "accessed": "2017-07-13T11:31:02.4363014-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-org-chart",
  //                   "virtualPath": "/widgets/pbi-org-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:35.6387684-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-org-chart",
  //                   "virtualPath": "/widgets/pbi-org-chart",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-org-chart"
  //             },
  //             "name": "pbi-org-chart",
  //             "accessed": "2017-07-13T11:31:02.4363014-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-org-chart",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "308 B",
  //                   "accessed": "2017-07-13T11:31:02.4363014-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-pie-chart",
  //                   "virtualPath": "/widgets/pbi-pie-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-pie-chart.html",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:38.7640926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-pie-chart",
  //                   "virtualPath": "/widgets/pbi-pie-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-pie-chart.js",
  //                   "size": "13 KB",
  //                   "accessed": "2017-07-13T11:31:02.4443129-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-pie-chart",
  //                   "virtualPath": "/widgets/pbi-pie-chart",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "11 KB",
  //                   "accessed": "2017-07-13T11:13:35.6387684-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-pie-chart",
  //                   "virtualPath": "/widgets/pbi-pie-chart",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-pie-chart"
  //             },
  //             "name": "pbi-pie-chart",
  //             "accessed": "2017-07-13T11:31:02.4443129-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-pie-chart",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "308 B",
  //                   "accessed": "2017-07-13T11:31:02.4443129-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-title-bar",
  //                   "virtualPath": "/widgets/pbi-title-bar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-title-bar.html",
  //                   "size": "646 B",
  //                   "accessed": "2017-07-13T11:13:38.7640926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-title-bar",
  //                   "virtualPath": "/widgets/pbi-title-bar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-title-bar.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:31:02.4443129-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-title-bar",
  //                   "virtualPath": "/widgets/pbi-title-bar",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:13:35.6387684-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-title-bar",
  //                   "virtualPath": "/widgets/pbi-title-bar",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-title-bar"
  //             },
  //             "name": "pbi-title-bar",
  //             "accessed": "2017-07-13T11:31:02.4443129-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-title-bar",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "pbi-trends-line.html",
  //                   "size": "3 KB",
  //                   "accessed": "2017-07-13T11:13:38.7640926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-trends-line",
  //                   "virtualPath": "/widgets/pbi-trends-line",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "pbi-trends-line.js",
  //                   "size": "14 KB",
  //                   "accessed": "2017-07-13T11:31:02.4521478-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-trends-line",
  //                   "virtualPath": "/widgets/pbi-trends-line",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:13:35.6387684-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-trends-line",
  //                   "virtualPath": "/widgets/pbi-trends-line",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-trends-line"
  //             },
  //             "name": "pbi-trends-line",
  //             "accessed": "2017-07-13T11:31:02.4521478-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\pbi-trends-line",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "equipment.service.js",
  //                         "size": "1 KB",
  //                         "accessed": "2017-07-13T13:58:27.7547232-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\deps",
  //                         "virtualPath": "/widgets/red-light-area-map/deps",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "history.service.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T13:58:27.7557303-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\deps",
  //                         "virtualPath": "/widgets/red-light-area-map/deps",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "sites.service.js",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T13:58:27.7567251-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\deps",
  //                         "virtualPath": "/widgets/red-light-area-map/deps",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "video.service.js",
  //                         "size": "12 KB",
  //                         "accessed": "2017-07-13T13:58:27.7587273-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\deps",
  //                         "virtualPath": "/widgets/red-light-area-map/deps",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\deps"
  //                   },
  //                   "name": "deps",
  //                   "accessed": "2017-07-13T13:58:27.7587273-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\deps",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "red-light-area-map"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "green-light.png",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T13:58:27.7712421-05:00",
  //                         "extension": ".png",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\images",
  //                         "virtualPath": "/widgets/red-light-area-map/images",
  //                         "type": "image"
  //                       },
  //                       {
  //                         "name": "red-light.png",
  //                         "size": "2 KB",
  //                         "accessed": "2017-07-13T13:58:27.7732461-05:00",
  //                         "extension": ".png",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\images",
  //                         "virtualPath": "/widgets/red-light-area-map/images",
  //                         "type": "image"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\images"
  //                   },
  //                   "name": "images",
  //                   "accessed": "2017-07-13T13:58:27.7732461-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map\\images",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "red-light-area-map"
  //                   ]
  //                 }
  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyRequestConfig.js",
  //                   "size": "328 B",
  //                   "accessed": "2017-07-13T13:58:27.6946718-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map",
  //                   "virtualPath": "/widgets/red-light-area-map",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "328 B",
  //                   "accessed": "2017-07-13T13:58:27.7104588-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map",
  //                   "virtualPath": "/widgets/red-light-area-map",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "red-light-area-map.html",
  //                   "size": "5 KB",
  //                   "accessed": "2017-07-13T13:58:27.7638926-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map",
  //                   "virtualPath": "/widgets/red-light-area-map",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "red-light-area-map.js",
  //                   "size": "17 KB",
  //                   "accessed": "2017-07-13T13:58:27.7261534-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map",
  //                   "virtualPath": "/widgets/red-light-area-map",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "snapshot.js",
  //                   "size": "328 B",
  //                   "accessed": "2017-07-13T13:58:27.7261534-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map",
  //                   "virtualPath": "/widgets/red-light-area-map",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T13:58:26.2103766-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map",
  //                   "virtualPath": "/widgets/red-light-area-map",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map"
  //             },
  //             "name": "red-light-area-map",
  //             "accessed": "2017-07-13T13:58:27.7702432-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-area-map",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "executive-summary.model.js",
  //                   "size": "1 B",
  //                   "accessed": "2017-07-13T13:58:27.7261534-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-executive-summary",
  //                   "virtualPath": "/widgets/red-light-executive-summary",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "red-light-executive-summary.component.js",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T13:58:27.7261534-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-executive-summary",
  //                   "virtualPath": "/widgets/red-light-executive-summary",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "red-light-executive-summary.html",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T13:58:27.7650774-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-executive-summary",
  //                   "virtualPath": "/widgets/red-light-executive-summary",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "red-light-executive-summary.service.js",
  //                   "size": "27 KB",
  //                   "accessed": "2017-07-13T13:58:27.752731-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-executive-summary",
  //                   "virtualPath": "/widgets/red-light-executive-summary",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "862 B",
  //                   "accessed": "2017-07-13T13:58:26.1947194-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-executive-summary",
  //                   "virtualPath": "/widgets/red-light-executive-summary",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-executive-summary"
  //             },
  //             "name": "red-light-executive-summary",
  //             "accessed": "2017-07-13T13:58:27.7650774-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\red-light-executive-summary",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "xed-admin-agencies-configuration.service.js",
  //                         "size": "8 KB",
  //                         "accessed": "2017-07-13T11:31:04.4202126-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies\\services",
  //                         "virtualPath": "/widgets/xed-admin-agencies/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-admin-agencies-district-attorney.service.js",
  //                         "size": "5 KB",
  //                         "accessed": "2017-07-13T11:31:04.4280541-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies\\services",
  //                         "virtualPath": "/widgets/xed-admin-agencies/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-admin-agencies-restricted-incident-type.service.js",
  //                         "size": "5 KB",
  //                         "accessed": "2017-07-13T11:31:04.4280541-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies\\services",
  //                         "virtualPath": "/widgets/xed-admin-agencies/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-admin-agencies-transfer-disposition.service.js",
  //                         "size": "5 KB",
  //                         "accessed": "2017-07-13T11:31:04.4280541-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies\\services",
  //                         "virtualPath": "/widgets/xed-admin-agencies/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-admin-agencies.service.js",
  //                         "size": "4 KB",
  //                         "accessed": "2017-07-13T11:31:04.4280541-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies\\services",
  //                         "virtualPath": "/widgets/xed-admin-agencies/services",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies\\services"
  //                   },
  //                   "name": "services",
  //                   "accessed": "2017-07-13T11:31:04.4280541-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies\\services",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "xed-admin-agencies"
  //                   ]
  //                 }
  //               ],
  //               "files": [
  //                 {
  //                   "name": "widget.json",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:17:25.9281521-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies",
  //                   "virtualPath": "/widgets/xed-admin-agencies",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "xed-admin-agencies.html",
  //                   "size": "19 KB",
  //                   "accessed": "2017-07-13T11:17:29.5529736-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies",
  //                   "virtualPath": "/widgets/xed-admin-agencies",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "xed-admin-agencies.js",
  //                   "size": "8 KB",
  //                   "accessed": "2017-07-13T11:31:04.4123792-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies",
  //                   "virtualPath": "/widgets/xed-admin-agencies",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies"
  //             },
  //             "name": "xed-admin-agencies",
  //             "accessed": "2017-07-13T11:31:04.4202126-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-admin-agencies",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "xed-e-portal-attachment-case-files-polling.service.js",
  //                               "size": "2 KB",
  //                               "accessed": "2017-07-13T11:31:04.4438872-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-case-files",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-case-files",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-attachment-case-files.html",
  //                               "size": "10 KB",
  //                               "accessed": "2017-07-13T11:17:29.5529736-05:00",
  //                               "extension": ".html",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-case-files",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-case-files",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-attachment-case-files.js",
  //                               "size": "6 KB",
  //                               "accessed": "2017-07-13T11:31:04.4438872-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-case-files",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-case-files",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-attachment-case-files.service.js",
  //                               "size": "9 KB",
  //                               "accessed": "2017-07-13T11:31:04.4518362-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-case-files",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-case-files",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-case-files"
  //                         },
  //                         "name": "xed-e-portal-attachment-case-files",
  //                         "accessed": "2017-07-13T11:31:04.4518362-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-case-files",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "component"
  //                         ]
  //                       },
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "xed-e-portal-attachment-locker-polling.service.js",
  //                               "size": "3 KB",
  //                               "accessed": "2017-07-13T11:31:04.4518362-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-locker",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-locker",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-attachment-locker.html",
  //                               "size": "6 KB",
  //                               "accessed": "2017-07-13T11:17:29.5686124-05:00",
  //                               "extension": ".html",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-locker",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-locker",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-attachment-locker.js",
  //                               "size": "5 KB",
  //                               "accessed": "2017-07-13T11:31:04.4518362-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-locker",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-locker",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-attachment-locker.service.js",
  //                               "size": "8 KB",
  //                               "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-locker",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-attachment-locker",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-locker"
  //                         },
  //                         "name": "xed-e-portal-attachment-locker",
  //                         "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-attachment-locker",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "component"
  //                         ]
  //                       },
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "xed-e-portal-cases-filter.service.js",
  //                               "size": "2 KB",
  //                               "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-cases",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-cases",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-cases-polling.service.js",
  //                               "size": "3 KB",
  //                               "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-cases",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-cases",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-cases.html",
  //                               "size": "10 KB",
  //                               "accessed": "2017-07-13T11:17:29.5686124-05:00",
  //                               "extension": ".html",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-cases",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-cases",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-cases.js",
  //                               "size": "12 KB",
  //                               "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-cases",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-cases",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-cases"
  //                         },
  //                         "name": "xed-e-portal-cases",
  //                         "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-cases",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "component"
  //                         ]
  //                       },
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "xed-e-portal-navigation.html",
  //                               "size": "2 KB",
  //                               "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                               "extension": ".html",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-navigation",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-navigation",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-navigation.js",
  //                               "size": "1 KB",
  //                               "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-navigation",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-navigation",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-navigation"
  //                         },
  //                         "name": "xed-e-portal-navigation",
  //                         "accessed": "2017-07-13T11:31:04.4596749-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-navigation",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "component"
  //                         ]
  //                       },
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "xed-e-portal-realtime-validation.service.js",
  //                               "size": "5 KB",
  //                               "accessed": "2017-07-13T11:31:04.467485-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-realtime",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-realtime",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-realtime.html",
  //                               "size": "6 KB",
  //                               "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                               "extension": ".html",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-realtime",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-realtime",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-realtime.js",
  //                               "size": "5 KB",
  //                               "accessed": "2017-07-13T11:31:04.467485-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-realtime",
  //                               "virtualPath": "/widgets/xed-e-portal/component/xed-e-portal-realtime",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-realtime"
  //                         },
  //                         "name": "xed-e-portal-realtime",
  //                         "accessed": "2017-07-13T11:31:04.467485-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component\\xed-e-portal-realtime",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "component"
  //                         ]
  //                       }
  //                     ],
  //                     "files": [

  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component"
  //                   },
  //                   "name": "component",
  //                   "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\component",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "xed-e-portal"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "xed-e-portal-attachment-file.service.js",
  //                               "size": "8 KB",
  //                               "accessed": "2017-07-13T11:31:04.467485-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\attachment",
  //                               "virtualPath": "/widgets/xed-e-portal/services/attachment",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-attachment.factory.js",
  //                               "size": "2 KB",
  //                               "accessed": "2017-07-13T11:31:04.467485-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\attachment",
  //                               "virtualPath": "/widgets/xed-e-portal/services/attachment",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\attachment"
  //                         },
  //                         "name": "attachment",
  //                         "accessed": "2017-07-13T11:31:04.467485-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\attachment",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "services"
  //                         ]
  //                       },
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "IXedEPortalCaseService.js",
  //                               "size": "317 B",
  //                               "accessed": "2017-07-13T11:31:04.4752884-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\case",
  //                               "virtualPath": "/widgets/xed-e-portal/services/case",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-case-lookup.service.js",
  //                               "size": "2 KB",
  //                               "accessed": "2017-07-13T11:31:04.4752884-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\case",
  //                               "virtualPath": "/widgets/xed-e-portal/services/case",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-case-note.service.js",
  //                               "size": "4 KB",
  //                               "accessed": "2017-07-13T11:31:04.4752884-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\case",
  //                               "virtualPath": "/widgets/xed-e-portal/services/case",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-case-pagination.service.js",
  //                               "size": "4 KB",
  //                               "accessed": "2017-07-13T11:31:04.4752884-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\case",
  //                               "virtualPath": "/widgets/xed-e-portal/services/case",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-case.service.js",
  //                               "size": "28 KB",
  //                               "accessed": "2017-07-13T11:31:04.4752884-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\case",
  //                               "virtualPath": "/widgets/xed-e-portal/services/case",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\case"
  //                         },
  //                         "name": "case",
  //                         "accessed": "2017-07-13T11:31:04.4752884-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\case",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "services"
  //                         ]
  //                       },
  //                       {
  //                         "folders": {
  //                           "directories": [

  //                           ],
  //                           "files": [
  //                             {
  //                               "name": "xed-e-portal-ui-case.service.js",
  //                               "size": "10 KB",
  //                               "accessed": "2017-07-13T11:31:04.4831117-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\ui",
  //                               "virtualPath": "/widgets/xed-e-portal/services/ui",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-ui-equalize.service.js",
  //                               "size": "6 KB",
  //                               "accessed": "2017-07-13T11:31:04.4831117-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\ui",
  //                               "virtualPath": "/widgets/xed-e-portal/services/ui",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-ui-navigation.service.js",
  //                               "size": "7 KB",
  //                               "accessed": "2017-07-13T11:31:04.4880067-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\ui",
  //                               "virtualPath": "/widgets/xed-e-portal/services/ui",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-ui-person.service.js",
  //                               "size": "11 KB",
  //                               "accessed": "2017-07-13T11:31:04.4896648-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\ui",
  //                               "virtualPath": "/widgets/xed-e-portal/services/ui",
  //                               "type": "editable"
  //                             },
  //                             {
  //                               "name": "xed-e-portal-ui-state.service.js",
  //                               "size": "12 KB",
  //                               "accessed": "2017-07-13T11:31:04.4909154-05:00",
  //                               "extension": ".js",
  //                               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\ui",
  //                               "virtualPath": "/widgets/xed-e-portal/services/ui",
  //                               "type": "editable"
  //                             }
  //                           ],
  //                           "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\ui"
  //                         },
  //                         "name": "ui",
  //                         "accessed": "2017-07-13T11:31:04.4909154-05:00",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services\\ui",
  //                         "open": false,
  //                         "parents": [
  //                           "widgets",
  //                           "xed-e-portal",
  //                           "services"
  //                         ]
  //                       }
  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "xed-e-portal-agency.service.js",
  //                         "size": "3 KB",
  //                         "accessed": "2017-07-13T11:31:04.4360792-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services",
  //                         "virtualPath": "/widgets/xed-e-portal/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-e-portal-case-district-attorney.service.js",
  //                         "size": "3 KB",
  //                         "accessed": "2017-07-13T11:31:04.4360792-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services",
  //                         "virtualPath": "/widgets/xed-e-portal/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-e-portal-message.service.js",
  //                         "size": "1 KB",
  //                         "accessed": "2017-07-13T11:31:04.4360792-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services",
  //                         "virtualPath": "/widgets/xed-e-portal/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-e-portal-person.service.js",
  //                         "size": "30 KB",
  //                         "accessed": "2017-07-13T11:31:04.4360792-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services",
  //                         "virtualPath": "/widgets/xed-e-portal/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-e-portal-user-message.service.js",
  //                         "size": "4 KB",
  //                         "accessed": "2017-07-13T11:31:04.4360792-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services",
  //                         "virtualPath": "/widgets/xed-e-portal/services",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "xed-e-portal-user.service.js",
  //                         "size": "3 KB",
  //                         "accessed": "2017-07-13T11:31:04.4438872-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services",
  //                         "virtualPath": "/widgets/xed-e-portal/services",
  //                         "type": "editable"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services"
  //                   },
  //                   "name": "services",
  //                   "accessed": "2017-07-13T11:31:04.4831117-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal\\services",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "xed-e-portal"
  //                   ]
  //                 }
  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "303 B",
  //                   "accessed": "2017-07-13T11:31:04.4123792-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal",
  //                   "virtualPath": "/widgets/xed-e-portal",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "3 KB",
  //                   "accessed": "2017-07-13T11:17:25.9669446-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal",
  //                   "virtualPath": "/widgets/xed-e-portal",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "xed-e-portal.html",
  //                   "size": "461 KB",
  //                   "accessed": "2017-07-13T11:17:29.5686124-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal",
  //                   "virtualPath": "/widgets/xed-e-portal",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "xed-e-portal.js",
  //                   "size": "9 KB",
  //                   "accessed": "2017-07-13T11:31:04.4202126-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal",
  //                   "virtualPath": "/widgets/xed-e-portal",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal"
  //             },
  //             "name": "xed-e-portal",
  //             "accessed": "2017-07-13T11:31:04.4360792-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "xed-e-portal-attachment-case-files.html",
  //                   "size": "10 KB",
  //                   "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-attachment-case-files",
  //                   "virtualPath": "/widgets/xed-e-portal-attachment-case-files",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-attachment-case-files"
  //             },
  //             "name": "xed-e-portal-attachment-case-files",
  //             "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-attachment-case-files",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "xed-e-portal-attachment-locker.html",
  //                   "size": "6 KB",
  //                   "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-attachment-locker",
  //                   "virtualPath": "/widgets/xed-e-portal-attachment-locker",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-attachment-locker"
  //             },
  //             "name": "xed-e-portal-attachment-locker",
  //             "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-attachment-locker",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "xed-e-portal-cases.html",
  //                   "size": "10 KB",
  //                   "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-cases",
  //                   "virtualPath": "/widgets/xed-e-portal-cases",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-cases"
  //             },
  //             "name": "xed-e-portal-cases",
  //             "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-cases",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "xed-e-portal-navigation.html",
  //                   "size": "2 KB",
  //                   "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-navigation",
  //                   "virtualPath": "/widgets/xed-e-portal-navigation",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-navigation"
  //             },
  //             "name": "xed-e-portal-navigation",
  //             "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-navigation",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [

  //               ],
  //               "files": [
  //                 {
  //                   "name": "xed-e-portal-realtime.html",
  //                   "size": "6 KB",
  //                   "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-realtime",
  //                   "virtualPath": "/widgets/xed-e-portal-realtime",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-realtime"
  //             },
  //             "name": "xed-e-portal-realtime",
  //             "accessed": "2017-07-13T11:17:29.5764746-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-e-portal-realtime",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           },
  //           {
  //             "folders": {
  //               "directories": [
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "sites.service.js",
  //                         "size": "3 KB",
  //                         "accessed": "2017-07-13T11:31:04.4438872-05:00",
  //                         "extension": ".js",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\deps",
  //                         "virtualPath": "/widgets/xed-health-monitor/deps",
  //                         "type": "editable"
  //                       },
  //                       {
  //                         "name": "states.xml",
  //                         "size": "145 KB",
  //                         "accessed": "2017-07-13T11:17:29.7794393-05:00",
  //                         "extension": ".xml",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\deps",
  //                         "virtualPath": "/widgets/xed-health-monitor/deps",
  //                         "type": "other"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\deps"
  //                   },
  //                   "name": "deps",
  //                   "accessed": "2017-07-13T11:31:04.4438872-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\deps",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "xed-health-monitor"
  //                   ]
  //                 },
  //                 {
  //                   "folders": {
  //                     "directories": [

  //                     ],
  //                     "files": [
  //                       {
  //                         "name": "blue.png",
  //                         "size": "4 KB",
  //                         "accessed": "2017-07-13T11:17:29.7637954-05:00",
  //                         "extension": ".png",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\images",
  //                         "virtualPath": "/widgets/xed-health-monitor/images",
  //                         "type": "image"
  //                       },
  //                       {
  //                         "name": "green.png",
  //                         "size": "4 KB",
  //                         "accessed": "2017-07-13T11:17:29.7637954-05:00",
  //                         "extension": ".png",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\images",
  //                         "virtualPath": "/widgets/xed-health-monitor/images",
  //                         "type": "image"
  //                       },
  //                       {
  //                         "name": "grey.png",
  //                         "size": "3 KB",
  //                         "accessed": "2017-07-13T11:17:29.7637954-05:00",
  //                         "extension": ".png",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\images",
  //                         "virtualPath": "/widgets/xed-health-monitor/images",
  //                         "type": "image"
  //                       },
  //                       {
  //                         "name": "red.png",
  //                         "size": "4 KB",
  //                         "accessed": "2017-07-13T11:17:29.7716205-05:00",
  //                         "extension": ".png",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\images",
  //                         "virtualPath": "/widgets/xed-health-monitor/images",
  //                         "type": "image"
  //                       },
  //                       {
  //                         "name": "yellow.png",
  //                         "size": "4 KB",
  //                         "accessed": "2017-07-13T11:17:29.7716205-05:00",
  //                         "extension": ".png",
  //                         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\images",
  //                         "virtualPath": "/widgets/xed-health-monitor/images",
  //                         "type": "image"
  //                       }
  //                     ],
  //                     "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\images"
  //                   },
  //                   "name": "images",
  //                   "accessed": "2017-07-13T11:17:29.7716205-05:00",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor\\images",
  //                   "open": false,
  //                   "parents": [
  //                     "widgets",
  //                     "xed-health-monitor"
  //                   ]
  //                 }
  //               ],
  //               "files": [
  //                 {
  //                   "name": "IMyScope.js",
  //                   "size": "333 B",
  //                   "accessed": "2017-07-13T11:31:04.4202126-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor",
  //                   "virtualPath": "/widgets/xed-health-monitor",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "widget.json",
  //                   "size": "1 KB",
  //                   "accessed": "2017-07-13T11:17:25.9988708-05:00",
  //                   "extension": ".json",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor",
  //                   "virtualPath": "/widgets/xed-health-monitor",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "xed-health-monitor.html",
  //                   "size": "9 KB",
  //                   "accessed": "2017-07-13T11:17:29.5686124-05:00",
  //                   "extension": ".html",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor",
  //                   "virtualPath": "/widgets/xed-health-monitor",
  //                   "type": "editable"
  //                 },
  //                 {
  //                   "name": "xed-health-monitor.js",
  //                   "size": "16 KB",
  //                   "accessed": "2017-07-13T11:31:04.4202126-05:00",
  //                   "extension": ".js",
  //                   "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor",
  //                   "virtualPath": "/widgets/xed-health-monitor",
  //                   "type": "editable"
  //                 }
  //               ],
  //               "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor"
  //             },
  //             "name": "xed-health-monitor",
  //             "accessed": "2017-07-13T11:31:04.4202126-05:00",
  //             "path": "C:\\source\\pbi-app\\app\\pbi\\widgets\\xed-health-monitor",
  //             "open": false,
  //             "parents": [
  //               "widgets"
  //             ]
  //           }
  //         ],
  //         "files": [

  //         ],
  //         "path": "C:\\source\\pbi-app\\app\\pbi\\widgets"
  //       },
  //       "name": "widgets",
  //       "accessed": "2017-07-13T13:58:26.2103766-05:00",
  //       "path": "C:\\source\\pbi-app\\app\\pbi\\widgets",
  //       "open": false,
  //       "parents": [

  //       ]
  //     }
  //   ],
  //   "files": [

  //   ],
  //   "path": "C:\\source\\pbi-app\\app\\pbi"
  // } as any;

  onNodeDropped($event: any): void {
    this.events.unshift(new Date().toLocaleString() + ' : Node Dropped "' + $event.name + '"');
  }

  getBoundDataMinusCircularReference(): any {
    const build = JSON.stringify(this.nodes, (key, value) => {
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
      }
      return value;
    }, 2);

    return build;
  }

  getRawData(): any {
    let obj = JSON.parse(JSON.stringify(JSON.parse(this.getBoundDataMinusCircularReference())));
    const cache = [] as any;
    return JSON.stringify(obj, (key, value) => {
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
  }
}
