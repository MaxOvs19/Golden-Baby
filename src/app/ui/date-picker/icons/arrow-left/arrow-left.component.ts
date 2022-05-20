import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  templateUrl: './arrow-left.component.svg',
  styleUrls: ['./arrow-left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowLeftComponent {}
