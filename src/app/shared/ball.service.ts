import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';

@Injectable()
export class BallService {

  public removeBall$ = new Subject()
    .map((x: string) => state => {
      delete state[x];

      return Object.assign({}, state);
    })

  public createBall$ = Observable.interval(3000)
                  .map((x) => (state) => {
                    var ball = {};

                    ball[x] = this.createBall();

                    return Object.assign({}, state, ball);
                  });


  public ball$ = Observable.merge(
    this.removeBall$, this.createBall$
  ).scan((state, changeFn) => changeFn(state), {});




  constructor() {}

  createBall () {
    return {
      xPos: Math.floor(window.innerWidth * Math.random()),
      yPos: Math.floor(window.innerHeight * Math.random())
    }
  }


}
