Pioneer Tree
=======================
Pioneer Tree is an Angular 4 and up tree component the aims to stay out of your way.  Giving you the freedom and tools necessary to produce dynamic tree components in markup that is defined by you.

###

Are you interested in contributing features or squashing bugs? Please take a look at the following to get started.

<a href="CONTRIBUTING.md" target="_blank">CONTRIBUTING</a>

## Features

- 

## Demo

<a href="https://pioneercode.github.io/pioneer-tree" target="_blank">Demo</a>

## Setup

### Requirements

- Angular 4 or greater

### Download

<a href="https://www.npmjs.com/package/@pioneer-code/pioneer-tree" target="_blank">npm</a>

```bash
npm i @pioneer-code/pioneer-tree
```

### Supply Module

For example, in SystemJS you would add the following mapping.

```javascript
'@pioneer-code/pioneer-tree': 'npm:@pioneer-tree/pioneer-tree/dist/bundles/pioneer-tree.umd.js'
```

### Import 

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { PioneerTreeComponent, PioneerTreeNodeComponent, PioneerTreeCollapseComponent } from '@pioneer-code/pioneer-tree'
import { PioneerTreeService } from "@pioneer-code/pioneer-tree"

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PioneerTreeComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
  ],
  bootstrap: [AppComponent],
  providers: [PioneerTreeService]
})
export class AppModule { }
```

### Markup

```html
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
```

## Changlog
<a href="CHANGELOG.md" target="_blank">CHANGELOG</a>
