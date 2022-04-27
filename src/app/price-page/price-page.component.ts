import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss'],
})
export class PricePageComponent implements OnInit {
  constructor(private router: Router) {}

  goRoutinePage() {
    this.router.navigate(['/routine']);
  }

  ngOnInit(): void {}
}
