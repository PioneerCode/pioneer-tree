Pioneer Tree
=======================
Pioneer Tree is an Angular 4 and up tree component the aims to stay out of your way.  Giving you the freedom and tools necessary to produce dynamic tree components in markup that is defined by you.

###

Are you intrested in contributing features or squashing bugs? Please take a look at the following to get started.

- [CONTRIBUTING](CONTRIBUTING.md)

## Features

- 

## Demo

## Setup

### Requirements

- Anguular 4 or greater

### Download

[npm](https://www.npmjs.com/package/@pioneer-code/pioneer-tree)
```bash
npm i @pioneer-code/pioneer-tree
```

### Supply Module

For example, in SystemJS you would ad the following mapping.

```javascript
'@pioneer-code/pioneer-tree': 'npm:@pioneer-tree/pioneer-tree/bundles/pioneer-tree.umd.js'
```

### Import 

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { PioneerTreeComponentm, PioneerTreeNodeComponent, PioneerTreeCollapseComponent } from '@pioneer-code/pioneer-tree'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PioneerTreeComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Markup

```html
<ng-template #nodeTemplate let-node>
    <div pioneer-tree-collapse [node]="node">
        {{node.folder.name}}
    </div>
    <ul pioneer-tree-repeater [nodes]="node.folder.children" [ngStyle]="node.pioneerTreeRepeater.getStyles()" [ngClass]="node.pioneerTreeRepeater.getClasses()">
        <li pioneer-tree-node *ngFor="let node of node.folder.children" [nodeTemplate]="nodeTemplate" [node]="node">
        </li>
    </ul>
</ng-template>
<ul pioneer-tree [nodes]="nodes">
    <li pioneer-tree-node *ngFor="let node of nodes" [nodeTemplate]="nodeTemplate" [node]="node">
    </li>
</ul>
```

## Changlog
[CHANGELOG](CHANGELOG.md)
