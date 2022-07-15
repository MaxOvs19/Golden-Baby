import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-quotes',
  templateUrl: './big-quotes.component.html',
  styleUrls: ['./big-quotes.component.scss'],
})
export class BigQuotesComponent {
  @Input()
  titleBlock!: string;

  @Input()
  paragraphFirst!: string;

  @Input()
  paragraphSecond!: string;

  constructor() {}
}
