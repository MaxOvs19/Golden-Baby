import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  constructor(private router: Router) {}

  goShcedule() {
    this.router.navigate(['/schedule']);
  }
}
