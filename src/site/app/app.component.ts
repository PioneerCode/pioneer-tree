import { Component, ViewChild } from '@angular/core';
import { IPioneerTreeConfiguration } from './lib/pioneer-tree.module';

@Component({
  selector: 'my-app',
  template: `
  <div class="row">
    <div class="large-6 columns">
      <ul class="menu">
        <li>
          <h2>Component</h2>
        </li>
        <li><button class="button tiny" (click)="ptComponent.pioneerTree.expandAllNodes()">Expand</button></li>
        <li><button class="button tiny" (click)="ptComponent.pioneerTree.collapseAllNodes()">Collapse</button></li>
      </ul>
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
          <li pioneer-tree-node *ngFor="let node of node.children" (nodeDropped)="onNodeDropped($event)" [nodeTemplate]="nodeTemplate"
            [repeaterTemplate]="repeaterTemplate" [node]="node">
          </li>
        </ul>
      </ng-template>
      <ul pioneer-tree #pt [configuration]="configuration" [nodes]="nodes">
        <li pioneer-tree-node *ngFor="let node of nodes" (nodeDropped)="onNodeDropped($event)" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate"
          [node]="node">
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
  `
})
export class AppComponent {
  dataView = 'raw';
  name = 'Pioneer Tree';
  events = [] as string[];
  configuration = {
    childPropertyName: 'children',
    sortPropertyName: 'sort',
    collapseAllOnLoad: true
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

  /**
   * Grab reference to pioneer tree component
   */
  @ViewChild('pt')
  ptComponent: any;

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
