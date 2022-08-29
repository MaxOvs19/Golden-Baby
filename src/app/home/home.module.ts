import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AdaptationChildrenComponent } from './components/adaptation-children/adaptation-children.component';
import { BigQuotesComponent } from './components/big-quotes/big-quotes.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ButtonModule } from '../ui/button';
import { SliderComponent } from './components/slider/slider.component';
import { InputModule } from '../ui/input';
import { DatePickerModule } from '../ui/date-picker';
import { FeedbackDialogModule } from '../ui/dialogs/feedback-dialog';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomeComponent,
    ConditionsComponent,
    GroupsComponent,
    AdaptationChildrenComponent,
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
    DatePickerModule,
    FeedbackDialogModule,
    MatDialogModule,
  ],
})
export class HomeModule {}
