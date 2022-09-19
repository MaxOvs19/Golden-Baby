import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { FeedbackComponent } from '@ui/feedback';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  constructor(private router: Router, private readonly _dialog: MatDialog) {}

  public goShcedule() {
    this.router.navigate(['/schedule']);
  }

  public openForm(): void {
    this._dialog.open(FeedbackComponent);
  }
}
