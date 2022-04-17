import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ButtonRedAppComponent } from './button-red-app/button-red-app.component';
import { ConditionsBlockComponent } from './conditions-block/conditions-block.component';
import { GroupsViewComponent } from './groups-view/groups-view.component';
import { SliderMainPageComponent } from './slider-main-page/slider-main-page.component';
import { AdaptationChildrenComponent } from './adaptation-children/adaptation-children.component';
import { ApplicationBodyFirstPageComponent } from './application-body-first-page/application-body-first-page.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { FooterComponent } from './footer/footer.component';
import { DailyRoutinePageComponent } from './daily-routine-page/daily-routine-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ButtonRedAppComponent,
    ConditionsBlockComponent,
    GroupsViewComponent,
    SliderMainPageComponent,
    AdaptationChildrenComponent,
    ApplicationBodyFirstPageComponent,
    ApplicationFormComponent,
    FooterComponent,
    DailyRoutinePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
