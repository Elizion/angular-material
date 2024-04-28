import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  constructor(private store: Store<{counter:{counter:number}}>) {}

  OnIncrement() {
    this.store.dispatch(increment())
  }

  OnDecrement() {
    this.store.dispatch(decrement())
  }

  OnReset() {
    this.store.dispatch(reset())
  }

}
