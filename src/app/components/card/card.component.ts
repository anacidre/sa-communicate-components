import { Component, OnInit, Input } from '@angular/core';
import * as SAButton from '../../../web-components/sa-button/sa-button.js';
import * as shaButton from '../../../web-components/sa-button/sa-button.js';


import { Berry } from '../../models/berries.model';

@Component({
  selector: 'sa-card',
  template: `
  <img id='shadow-image' class='shadow__image' src='{{ berry.src }}' alt='{{berry.title}}'>
  <div id='shadow-info' class='shadow__info'>
      <h3 name='title' id='title' role='header' class='shadow__title'>{{ berry.title }}</h3>
      <p name='description' id='description' class='shadow__description'>{{ berry.description }}</p>
  </div>
  <sa-button text="Add to basket" (click)="saFunction()" style="--padding:5px; --font-size: 14px;"></sa-button>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() berry: Berry;


  constructor() { }

  ngOnInit() {
    console.log(SAButton);
  }

  saFunction() {
    alert('Consider it added!');
  }

}
