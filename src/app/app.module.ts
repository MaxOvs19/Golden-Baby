import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './ui/footer';
import { HeaderModule } from './ui/header';
import { LinkReturnModule } from './ui/link-return';
import { InputModule } from './ui/input/input.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    LinkReturnModule,
    InputModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
