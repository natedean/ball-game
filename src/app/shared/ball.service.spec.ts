import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BallService } from './ball.service';

describe('Ball Service', () => {
  beforeEachProviders(() => [BallService]);

  it('should ...',
      inject([BallService], (service: BallService) => {
    expect(service).toBeTruthy();
  }));
});
