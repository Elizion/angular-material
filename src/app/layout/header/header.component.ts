import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
  } from '@angular/core';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],    
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class HeaderComponent {

    @Output() menuToggled = new EventEmitter<boolean>();
  
    user: string = 'Eli';  
  
    logout(): void {
      console.log('Logged out');
    }
    
  }
  