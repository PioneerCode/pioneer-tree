import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PioneerTreeComponent } from './lib/components/pioneer-tree/pioneer-tree.component'
import { PioneerTreeNodeComponent } from './lib/components/pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from './lib/components/pioneer-tree-collapse/pioneer-tree-collapse.component'

import { PioneerTreeModule } from './lib/pioneer-tree'

import { PioneerTreeService, IPioneerTreeService } from "./lib/services/pioneer-tree.service"

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