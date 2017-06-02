import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PioneerTreeComponent } from './lib/components/pioneer-tree/pioneer-tree.component'
import { PioneerTreeNodeComponent } from './lib/components/pioneer-tree-node/pioneer-tree-node.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PioneerTreeComponent,
    PioneerTreeNodeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }