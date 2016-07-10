import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class BallService {

  private change$ = new Subject;

  public ball$ = Observable.interval(1000)
                  .map(this.createBall)
                  .do((x) => console.log(x))
                  .scan((acc, x) => acc.concat([x]), []);

  constructor() {}

  createBall (x) {
    return {
      id: x,
      xPos: Math.floor(window.innerWidth * Math.random()),
      yPos: Math.floor(window.innerHeight * Math.random())
    }
  }


}
