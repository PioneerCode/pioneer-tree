import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: `
<div class="row expanded">
  <div class="large-6 columns">
    <h2>Tree Component</h2>
    <div class="callout">
      <ng-template #nodeTemplate let-node>
        <div pioneer-tree-collapse [node]="node">
          {{node.folder.name}}
        </div>
      </ng-template>
      <ng-template #repeaterTemplate let-node>
        <ul pioneer-tree-repeater [nodes]="node.folder.children">
          <li pioneer-tree-node *ngFor="let node of node.folder.children" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate" [node]="node">
          </li>
        </ul>
      </ng-template>
      <ul pioneer-tree [nodes]="nodes">
        <li pioneer-tree-node *ngFor="let node of nodes" [nodeTemplate]="nodeTemplate" [repeaterTemplate]="repeaterTemplate" [node]="node">
        </li>
      </ul>
    </div>
  </div>
  <div class="large-6 columns">
    <h2>Raw Tree</h2>
    <div class="callout">
      <pre>{{nodes | json}}</pre>
    </div>
  </div>
</div>  
`
})
export class AppComponent {
  name = 'Angular';
  nodes = [
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
  ]
}