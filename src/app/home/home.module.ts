import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ConditionsBlockComponent } from './components/conditions-block/conditions-block.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { AdaptationChildrenComponent } from './components/adaptation-children/adaptation-children.component';
import { BidBodyMainPageComponent } from './components/bid-body-main-page/bid-body-main-page.component';
import { BlockBigQuotesComponent } from './components/block-big-quotes/block-big-quotes.component';
import { BidFormIntroductionComponent } from './components/bid-form-introduction/bid-form-introduction.component';
import { ButtonModule } from '../ui/button';

@NgModule({
  declarations: [
    MainPageComponent,
    ConditionsBlockComponent,
    GroupsViewComponent,
    AdaptationChildrenComponent,
    BidBodyMainPageComponent,
    BlockBigQuotesComponent,
    BidFormIntroductionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ButtonModule],
})
export class HomeModule {}
