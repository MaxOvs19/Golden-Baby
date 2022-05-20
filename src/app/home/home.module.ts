import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConditionsBlockComponent } from './components/conditions-block/conditions-block.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { AdaptationChildrenComponent } from './components/adaptation-children/adaptation-children.component';
import { FeedbackBodyComponent } from './components/feedback-body/feedback-body.component';
import { BlockBigQuotesComponent } from './components/block-big-quotes/block-big-quotes.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ButtonModule } from '../ui/button';

import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConditionsBlockComponent,
    GroupsViewComponent,
    AdaptationChildrenComponent,
    FeedbackBodyComponent,
    BlockBigQuotesComponent,
    FeedbackComponent,
    SliderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ButtonModule, CarouselModule, ReactiveFormsModule],
})
export class HomeModule {}
