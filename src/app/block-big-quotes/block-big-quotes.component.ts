import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-big-quotes',
  templateUrl: './block-big-quotes.component.html',
  styleUrls: ['./block-big-quotes.component.scss'],
})
export class BlockBigQuotesComponent implements OnInit {
  @Input()
  titleBlock!: string;
  @Input()
  paragraphFirst!: string;
  @Input()
  paragraphSecond!: string;

  constructor() {}

  ngOnInit(): void {}
}
