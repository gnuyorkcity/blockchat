import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    BubblesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
