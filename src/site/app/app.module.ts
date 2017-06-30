import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PioneerTreeModule } from './lib/pioneer-tree.module';

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
