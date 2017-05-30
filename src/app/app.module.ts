import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component'


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
