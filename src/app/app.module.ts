import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstMainPageComponent } from './first-main-page/first-main-page.component';
import { ButtonRedAppComponent } from './button-red-app/button-red-app.component';
import { ConditionsCompBlockComponent } from './conditions-comp-block/conditions-comp-block.component';
import { GroupsViewComponent } from './groups-view/groups-view.component';
import { SliderMainPageComponent } from './slider-main-page/slider-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstMainPageComponent,
    ButtonRedAppComponent,
    ConditionsCompBlockComponent,
    GroupsViewComponent,
    SliderMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
