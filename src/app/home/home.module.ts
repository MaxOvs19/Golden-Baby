import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ButtonModule } from '@ui/button';
import { FeedbackDialogModule } from '@ui/dialogs/feedback-dialog';
import { FeedbackModule } from '@ui/feedback';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AdaptationChildrenComponent } from './components/adaptation-children/adaptation-children.component';
import { BigQuotesComponent } from './components/big-quotes/big-quotes.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConditionsComponent,
    GroupsComponent,
    AdaptationChildrenComponent,
    BigQuotesComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    CarouselModule,
    FeedbackDialogModule,
    FeedbackModule,
  ],
})
export class HomeModule {}
