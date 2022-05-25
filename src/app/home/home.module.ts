import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { AdaptationChildrenComponent } from './components/adaptation-children/adaptation-children.component';
import { FeedbackBodyComponent } from './components/feedback-body/feedback-body.component';
import { BlockBigQuotesComponent } from './components/block-big-quotes/block-big-quotes.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ButtonModule } from '../ui/button';
import { BoxTopComponent } from './components/adaptation-children/component/box-top/box-top.component';
import { BoxMidlComponent } from './components/adaptation-children/component/box-midl/box-midl.component';
import { BoxBottomComponent } from './components/adaptation-children/component/box-bottom/box-bottom.component';

import { SliderComponent } from './components/slider/slider.component';
import { InputModule } from '../ui/input';

@NgModule({
  declarations: [
    HomeComponent,
    ConditionsComponent,
    GroupsViewComponent,
    AdaptationChildrenComponent,
    FeedbackBodyComponent,
    BlockBigQuotesComponent,
    FeedbackComponent,
    SliderComponent,
    BoxTopComponent,
    BoxMidlComponent,
    BoxBottomComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    CarouselModule,
    ReactiveFormsModule,
    InputModule,
  ],
})
export class HomeModule {}
