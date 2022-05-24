import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups-view',
  templateUrl: './groups-view.component.html',
  styleUrls: ['./groups-view.component.scss'],
})
export class GroupsViewComponent {
  constructor(private router: Router) {}

  // goPrices() {
  //   this.router.navigate(['/prices']);
  //   this.router.navigate;
  // }
}
