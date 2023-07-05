import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppTest} from "./apptest.component";

import { DevisComponent } from './devis/devis.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTest,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
