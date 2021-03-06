﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PioneerTree } from './models/pioneer-tree.model';
import { PioneerTreeComponent } from './components/pioneer-tree/pioneer-tree.component';
import { PioneerTreeRepeaterComponent } from './components/pioneer-tree-repeater/pioneer-tree-repeater.component';
import { PioneerTreeNodeComponent } from './components/pioneer-tree-node/pioneer-tree-node.component';
import { PioneerTreeCollapseComponent } from './components/pioneer-tree-collapse/pioneer-tree-collapse.component';
import { PioneerTreeHandleComponent } from './components/pioneer-tree-handle/pioneer-tree-handle.component';
import { PioneerTreeDropzoneDirective } from './directives/pioneer-tree-dropzone/pioneer-tree-dropzone.directive';
import { PioneerTreeDropParentService } from './services/pioneer-tree-drop-parent.service';
import { PioneerTreeConfiguration } from './models/pioneer-tree-configuration.model';
import { PioneerTreeDropChildService } from './services/pioneer-tree-drop-child.service';
import { PioneerTreeDropRootService } from './services/pioneer-tree-drop-root.service';
import { PioneerTreeBuildService } from './services/pioneer-tree-build.service';
import { PioneerTreeUidService } from './services/pioneer-tree-uid.service';
import { PioneerTreeExpandCollapseService } from './services/pioneer-tree-expand-collapse.service';
import { PioneerTreeDropService } from './services/pioneer-tree-drop.service';
import { PioneerTreeStringifyService } from './services/pioneer-tree-stringify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PioneerTreeComponent,
    PioneerTreeRepeaterComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent,
    PioneerTreeHandleComponent,
    PioneerTreeDropzoneDirective
  ],
  exports: [
    PioneerTreeComponent,
    PioneerTreeRepeaterComponent,
    PioneerTreeNodeComponent,
    PioneerTreeCollapseComponent,
    PioneerTreeHandleComponent,
    PioneerTreeDropzoneDirective
  ],
  providers: [
    PioneerTree,
    PioneerTreeDropRootService,
    PioneerTreeDropParentService,
    PioneerTreeDropChildService,
    PioneerTreeUidService,
    PioneerTreeExpandCollapseService,
    PioneerTreeBuildService,
    PioneerTreeDropService,
    PioneerTreeStringifyService,
    PioneerTreeConfiguration
  ]
})
export class PioneerTreeModule { }
