import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConditionsBlockComponent } from './components/conditions-block/conditions-block.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { AdaptationChildrenComponent } from './components/adaptation-children/adaptation-children.component';
import { BidBodyMainPageComponent } from './components/bid-body-main-page/bid-body-main-page.component';
import { BlockBigQuotesComponent } from './components/block-big-quotes/block-big-quotes.component';
import { BidFormIntroductionComponent } from './components/bid-form-introduction/bid-form-introduction.component';
import { ButtonModule } from '../ui/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderMainPageComponent } from './components/slider-main-page/slider-main-page.component';
import { FormsModule } from '@angular/forms';
import { ExamplePipe } from './pipes/emaxple.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ConditionsBlockComponent,
    GroupsViewComponent,
    AdaptationChildrenComponent,
    BidBodyMainPageComponent,
    BlockBigQuotesComponent,
    BidFormIntroductionComponent,
    SliderMainPageComponent,
    ExamplePipe,
  ],
  imports: [CommonModule, HomeRoutingModule, ButtonModule, CarouselModule, FormsModule],
})
export class HomeModule {}
