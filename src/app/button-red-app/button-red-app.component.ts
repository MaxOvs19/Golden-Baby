import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-red-app',
  templateUrl: './button-red-app.component.html',
  styleUrls: ['./button-red-app.component.scss'],
})
export class ButtonRedAppComponent implements OnInit {
  @Input()
  titleButton!: string;
  constructor() {}

  ngOnInit(): void {}
}
