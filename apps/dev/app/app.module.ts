import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PioneerTreeModule } from '../../../projects/pctree/src/lib/pioneer-tree.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PioneerTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
