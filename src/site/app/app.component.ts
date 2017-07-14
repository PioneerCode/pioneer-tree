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
          {{node.name}}
        </span>
      </ng-template>
      <ng-template #repeaterTemplate let-node>
        <ul pioneer-tree-repeater [nodes]="node.children" [configuration]="configuration">
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
