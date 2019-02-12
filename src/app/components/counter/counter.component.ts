import { Component, OnInit, Input } from '@angular/core';
import * as SAButton from '../../../web-components/sa-button/sa-button.js';

import { Berry } from '../../models/berries.model';




@Component({
  selector: 'sa-counter',
  template: `
  <div class="counter">
  <sa-button text="Add to basket" (click)="increment()" style="--padding:5px; --font-size: 14px;"></sa-button>
  <p>Added: {{ counter }}<span> {{ berry.title }}</span></p>
  <sa-button text="Remove" (click)="remove()" style="--padding:5px; --font-size: 14px;"></sa-button>
  </div>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() berry: Berry;

  public counter = 0;

  constructor() { }

  ngOnInit() {
    console.log(SAButton);
  }

  increment() {
    this.counter = this.counter + 1;
  }
  remove(){
    this.counter = 0;
  }
}
