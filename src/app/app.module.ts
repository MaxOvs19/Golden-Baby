import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterModule } from '@ui/footer';
import { HeaderModule } from '@ui/header';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocaleModule } from './locale/locale.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    LocaleModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
