import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    OnDestroy,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    OnChanges,
    DoCheck
{
  constructor(private readonly homeService: HomeService) {
    // Bad code!!!!!!! bad practice!!!!!
    // setTimeout( () => {
    //   this.homeService.foo()
    // }, 3000)
  } // homeService = new HomeService()

  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}

// const components = [new AppComponent(), .... ]
//....
// Init Angular Application
/* components.forEach( c => {
  if (c instanceof OnInit) {
    c.ngOnInit()
  }
})


// Destroy Angular Application
/* _____components.forEach( c => {
  if (c instanceof OnDestroy) {
    c.ngOnDestroy()
  }
})

*/
