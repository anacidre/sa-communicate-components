import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';

import { Berry } from '../models/berries.model';
import { BERRIES } from '../berries';


@Injectable({ providedIn: 'root' })
export class BerryService {

  constructor() {}

  getBerries(): Observable<Berry[]> {
    return of(BERRIES);
  }

   getBerry(id: number): Observable<Berry> {
    return of(BERRIES.find(berry => berry.id === id));
  }
}
