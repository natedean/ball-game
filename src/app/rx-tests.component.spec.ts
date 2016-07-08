import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RxTestsAppComponent } from '../app/rx-tests.component';

beforeEachProviders(() => [RxTestsAppComponent]);

describe('App: RxTests', () => {
  it('should create the app',
      inject([RxTestsAppComponent], (app: RxTestsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rx-tests works!\'',
      inject([RxTestsAppComponent], (app: RxTestsAppComponent) => {
    expect(app.title).toEqual('rx-tests works!');
  }));
});
