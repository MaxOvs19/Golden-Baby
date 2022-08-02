import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearsComponent {
  @Input()
  public years: number[] | null = [];

  @Input()
  public skip: number | null = 0;

  @Input()
  public length = 35;

  @Output()
  public yearSelected = new EventEmitter<number>();

  public setYear(year: number): void {
    this.yearSelected.emit(year);
  }
}
