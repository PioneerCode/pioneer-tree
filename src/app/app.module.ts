import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component'

import { PioneerTreeInclude } from './components/pioneer-tree-include/pioneer-tree-include.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PioneerTreeComponent,
    PioneerTreeNodeComponent,
    PioneerTreeInclude
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
