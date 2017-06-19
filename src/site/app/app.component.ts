import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>
  <div class="row expanded">
    <div class="large-12 columns">
      <div class="float-left">
        <h2>Pioneer <span>Code</span></h2>
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
          </ul>
        </div>
        <div class="large-6 columns">
          <ul>
            <li>
              Collapsible nodes
            </li>
            <li>
              Selected node tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="large-4 columns">
      <h4>Coming Soon!</h4>
      <ul>
        <li>
          Drag & Drop
        </li>
        <li>
          Filtering
        </li>
        <li>
          Add & Delete
        </li>
        <li>
          Sort tracking
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="data">
  <div class="row">
    <div class="large-8 columns">
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
        <div *ngIf="dataView === 'raw'">
          <pre>{{raw | json}}</pre>
        </div>
        <div *ngIf="dataView === 'bound'">
          <pre>{{nodes | json}}</pre>
        </div>
    </div>
    <div class="large-4 columns">
      <h2>Component</h2>
      <ng-template #nodeTemplate let-node>
        <div pioneer-tree-collapse [node]="node">
          <i class="fa fa-folder"></i>
          {{node.name}}
        </div>
      </ng-template>
      <ng-template #repeaterTemplate let-node>
        <ul pioneer-tree-repeater [nodes]="node.children">
          <li pioneer-tree-node *ngFor="let node of node.children" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate" [node]="node">
          </li>
        </ul>
      </ng-template>
      <ul pioneer-tree [nodes]="nodes">
        <li pioneer-tree-node *ngFor="let node of nodes" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate" [node]="node">
        </li>
      </ul>
    </div>
  </div>
</section>
`
})
export class AppComponent {
  dataView = "raw";
  name = 'Pioneer Tree';
  nodes = [
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
  ] as any;
  raw = [
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
  ] as any;
}