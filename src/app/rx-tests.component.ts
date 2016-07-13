import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { Http } from '@angular/http';

import { BallService } from './shared/ball.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';

@Component({
  moduleId: module.id,
  selector: 'rx-tests-app',
  providers: [BallService],
  templateUrl: 'rx-tests.component.html',
  styleUrls: ['rx-tests.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxTestsAppComponent implements OnInit {
  title = 'rx-tests works!';
  ballMap;
  ballList$;
  removeBall$;

  constructor(ballService: BallService) {
    this.removeBall$ = ballService.removeBall$;

    this.ballList$ = ballService.ballList$;

    ballService.ballMap$.subscribe(x => this.ballMap = x); //unwrap ballMap
  }
}
