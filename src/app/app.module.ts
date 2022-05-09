import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './ui/footer';
import { HeaderModule } from './ui/header';
import { LinkReturnModule } from './ui/link-return';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, FooterModule, LinkReturnModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
