import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PioneerTreeComponent } from './lib/components/pioneer-tree/pioneer-tree.component'
import { PioneerTreeNodeComponent } from './lib/components/pioneer-tree-node/pioneer-tree-node.component'
import { PioneerTreeCollapseComponent } from './lib/components/pioneer-tree-collapse/pioneer-tree-collapse.component'
import { PioneerTreeHandleComponent } from './lib/components/pioneer-tree-handle/pioneer-tree-handle.component'

import { PioneerTreeDropzoneDirective } from './lib/directives/pioneer-tree-dropzone/pioneer-tree-dropzone.directive'

import { PioneerTreeModule } from './lib/pioneer-tree'

import { PioneerTreeService } from "./lib/services/pioneer-tree.service"

@NgModule({
  imports: [
    BrowserModule, 
    PioneerTreeModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }