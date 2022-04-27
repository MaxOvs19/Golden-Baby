import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ButtonRedAppComponent } from './button-red-app/button-red-app.component';
import { ConditionsBlockComponent } from './conditions-block/conditions-block.component';
import { GroupsViewComponent } from './groups-view/groups-view.component';
import { DailyRoutinePageComponent } from './daily-routine-page/daily-routine-page.component';
import { SliderMainPageComponent } from './slider-main-page/slider-main-page.component';
import { AdaptationChildrenComponent } from './adaptation-children/adaptation-children.component';
import { BidBodyMainPageComponent } from './bid-body-main-page/bid-body-main-page.component';
import { BidFormIntroductionComponent } from './bid-form-introduction/bid-form-introduction.component';
import { FooterComponent } from './footer/footer.component';
import { PricePageComponent } from './price-page/price-page.component';
import { BlockBigQuotesComponent } from './block-big-quotes/block-big-quotes.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ButtonRedAppComponent,
    ConditionsBlockComponent,
    GroupsViewComponent,
    DailyRoutinePageComponent,
    SliderMainPageComponent,
    AdaptationChildrenComponent,
    BidBodyMainPageComponent,
    BidFormIntroductionComponent,
    PricePageComponent,
    FooterComponent,
    BlockBigQuotesComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
