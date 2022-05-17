import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearsComponent implements OnInit {
  @Input()
  public years: number[] = [];

  @Input()
  public skip = 0;

  @Input()
  public length = 35;

  @Output()
  public yearSelected = new EventEmitter<number>();

  ngOnInit(): void {}

  public setYear(year: number): void {
    this.yearSelected.emit(year);
  }
}
