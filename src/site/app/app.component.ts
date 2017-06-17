import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>
  <div class="row expanded">
    <div class="large-12 columns clearfix">
      <div class="float-left">
        <h1>Pioneer <span>Tree</span></h1>
      </div>
      <div class="float-right">
        <ul class="menu simple">
          <li>
            <a href="" target="_blank" title="">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
<div class="row">
  <div class="large-8 columns">
    <section class="data">
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
    </section>
  </div>
  <div class="large-4 columns">
    <h2>Component</h2>
    <ng-template #nodeTemplate let-node>
      <div pioneer-tree-collapse [node]="node">
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