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
import { AdaptationChildrenTopBlockComponent } from './components/adaptation-children-top-block/adaptation-children-top-block.component';
import { AdaptationChildrenMidlBlockComponent } from './components/adaptation-children-midl-block/adaptation-children-midl-block.component';
import { AdaptationChildreBottomBlockComponent } from './components/adaptation-children-bottom-block/adaptation-children-bottom-block.component';

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
    AdaptationChildrenTopBlockComponent,
    AdaptationChildrenMidlBlockComponent,
    AdaptationChildreBottomBlockComponent,
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
