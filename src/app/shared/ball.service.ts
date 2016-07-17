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
      delete state[x];

      return Object.assign({}, state);
    })

  public resetState$ = new Subject()
    .map((x: number) => state => {
      return {};
    });   

  public createBall$ = Observable.interval(3000)
                  .map((x) => (state) => {
                    const newBall = {};

                    newBall[x] = this.createBall();

                    return Object.assign({}, state, newBall);
                  });

  public ballMap$ = Observable.merge(
    this.removeBall$, this.createBall$, this.resetState$
  ).scan((state, changeFn) => changeFn(state), {});

  private createBall () {
    return {
      xPos: Math.floor(window.innerWidth * Math.random()),
      yPos: Math.floor(window.innerHeight * Math.random())
    }
  }

  constructor() {}
}
