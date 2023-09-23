import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { Exercicio01Component } from './exercicio01/exercicio01.component';
import { Exercicio02aComponent } from './exercicio02a/exercicio02a.component';
import { Exercicio02bComponent } from './exercicio02b/exercicio02b.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, 
    Exercicio01Component, Exercicio02aComponent,
    Exercicio02bComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
