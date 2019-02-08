import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Berry } from '../../models/berries.model';
import {BerryService} from '../../services/berries.service';



@Component({
  selector: 'sa-dashboard',
  template: `
    <sa-header></sa-header>
    <div class="berries">
    <sa-card  *ngFor="let berry of berries$ | async"
    [berry]="berry"></sa-card>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  berries$: Observable<Berry[]>;

  constructor(
    private service: BerryService
  ) { }

  ngOnInit(){
    this.berries$ = this.service.getBerries();
  }

}
