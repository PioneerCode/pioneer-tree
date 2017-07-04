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
        <pre>{{getRawData()}}</pre>
      </div>
      <div *ngIf="dataView === 'bound'">
        <!--<pre>{{getBoundDataMinusCircularReference()}}</pre>-->
      </div>
    </div>
    <div class="large-4 columns">
      <h2>Component</h2>
      <ng-template #nodeTemplate let-node>
        <span pioneer-tree-collapse [node]="node">
          <i class="fa" [ngClass]="this.node.pioneerTreeNode.isCollapsed() ? 'fa-folder' : 'fa-folder-open'"></i>
        </span>
        <span pioneer-tree-handle [node]="node">
          {{node.name}}
        </span>
      </ng-template>
      <ng-template #repeaterTemplate let-node>
        <ul pioneer-tree-repeater [nodes]="node.children" [configuration]="configuration">
          <li pioneer-tree-node *ngFor="let node of node.children" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate" [node]="node">
          </li>
        </ul>
      </ng-template>
      <ul pioneer-tree [nodes]="nodes" [configuration]="configuration">
        <li pioneer-tree-node *ngFor="let node of nodes" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate" [node]="node">
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="markup">
    <div class="row">
      <div class="large-12 columns">
        <h2>HTML</h2>
        <pre ngNonBindable>
&lt;ng-template #nodeTemplate let-node&gt;
  &lt;span pioneer-tree-collapse [node]="node"&gt;
    &lt;i class="fa"
    [ngClass]="this.node.pioneerTreeNode.isCollapsed() ? 'fa-folder' : 'fa-folder-open'"&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;span pioneer-tree-handle [node]="node"&gt;
    {{node.name}}
  &lt;/span&gt;
&lt;/ng-template&gt;
&lt;ng-template #repeaterTemplate let-node&gt;
  &lt;ul pioneer-tree-repeater [nodes]="node.children" [configuration]="configuration"&gt;
    &lt;li pioneer-tree-node *ngFor="let node of node.children"
    [nodeTemplate]="nodeTemplate"
    [repeaterTemplate]="repeaterTemplate"
    [node]="node"&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/ng-template&gt;
&lt;ul pioneer-tree [nodes]="nodes" [configuration]="configuration"&gt;
  &lt;li pioneer-tree-node *ngFor="let node of nodes"
  [nodeTemplate]="nodeTemplate"
  [repeaterTemplate]="repeaterTemplate"
  [node]="node"&gt;
  &lt;/li&gt;
&lt;/ul&gt;
        </pre>
      </div>
    </div>
</section>
`
})
export class AppComponent {
  dataView = 'raw';
  name = 'Pioneer Tree';
  configuration = {
    childPropertyName: 'children',
    sortPropertyName: 'sort'
  } as IPioneerTreeConfiguration;
  nodes = [
    {
      'name': 'root-1',
      'sort': 0,
    },
    {
      'name': 'root-2',
      'sort': 1
    },
    {
      'name': 'root-3',
      'sort': 2
    },
    {
      'name': 'root-4',
      'sort': 3
    },
    {
      'name': 'root-5',
      'sort': 4
    }
  ] as any;

  getBoundDataMinusCircularReference(): any {
    const cache = [] as any;
    return JSON.stringify(this.nodes, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }
      return value;
    }, 2);
  }

  getRawData(): any {
    const cache = [] as any;
    return JSON.stringify(JSON.parse(this.getBoundDataMinusCircularReference()), (key, value) => {
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
