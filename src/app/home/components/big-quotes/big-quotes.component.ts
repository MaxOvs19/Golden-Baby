import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-quotes',
  templateUrl: './big-quotes.component.html',
  styleUrls: ['./big-quotes.component.scss'],
})
export class BigQuotesComponent {
  @Input()
  public titleBlock!: string;

  @Input()
  public paragraphFirst!: string;

  @Input()
  public paragraphSecond!: string;
}
