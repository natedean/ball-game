import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import * as Immutable from 'immutable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';

@Injectable()
export class BallService {

  public removeBall$ = new Subject()
    .map((x: string) => state => {
      return state.delete(x);
    })

  public createBall$ = Observable.interval(3000)
                  .map((x) => (state) => {
                    return state.set(x, this.createBall());
                  });

  public ballMap$ = Observable.merge(
    this.removeBall$, this.createBall$
  ).scan((state, changeFn) => changeFn(state), Immutable.Map());

  public ballList$ = this.ballMap$.map(x => x.keys());

  private createBall () {
    return Immutable.Map({
      xPos: Math.floor(window.innerWidth * Math.random()),
      yPos: Math.floor(window.innerHeight * Math.random())
    })
  }

  constructor() {}
}
