import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PioneerTreeModule } from '@pioneer-code/pioneer-tree';

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
