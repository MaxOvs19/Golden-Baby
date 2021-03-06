import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AdaptationChildrenComponent } from './components/adaptation-children/adaptation-children.component';
import { FeedbackBodyComponent } from './components/feedback-body/feedback-body.component';
import { BigQuotesComponent } from './components/big-quotes/big-quotes.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ButtonModule } from '../ui/button';

import { SliderComponent } from './components/slider/slider.component';
import { InputModule } from '../ui/input';

@NgModule({
  declarations: [
    HomeComponent,
    ConditionsComponent,
    GroupsComponent,
    AdaptationChildrenComponent,
    FeedbackBodyComponent,
    BigQuotesComponent,
    FeedbackComponent,
    SliderComponent,
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
