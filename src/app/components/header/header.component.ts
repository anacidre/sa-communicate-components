import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-header',
  template: `
  <div id="wrapperHeader">

  <div class="header">
   <h1>Sherry's Berries!!!</h1>
   <img class="shopping-cart" src="../../../assets/img/shopping-cart.svg">

  </div>

 </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
