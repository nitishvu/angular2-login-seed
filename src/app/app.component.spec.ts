import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2LoginSeedAppComponent } from '../app/angular2-login-seed.component';

beforeEachProviders(() => [Angular2LoginSeedAppComponent]);

describe('App: Angular2LoginSeed', () => {
  it('should create the app',
      inject([Angular2LoginSeedAppComponent], (app: Angular2LoginSeedAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-login-seed works!\'',
      inject([Angular2LoginSeedAppComponent], (app: Angular2LoginSeedAppComponent) => {
    expect(app.title).toEqual('angular2-login-seed works!');
  }));
});
