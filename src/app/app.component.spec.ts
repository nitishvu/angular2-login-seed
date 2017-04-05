 /* import {
    beforeEachProviders,
    describe,
    expect,
    it,
    inject
  } from '@angular/core/testing';
*/
import {
  inject, TestBed } from '@angular/core/testing';

//import { Angular2LoginSeedAppComponent } from '../app/angular2-login-seed.component';
import { AppComponent } from './app.component';
 beforeEach(() => TestBed.configureTestingModule({
    providers: [ AppComponent ]
  }));

beforeEach(()  => [AppComponent]);

describe('App: Angular2LoginSeed', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-login-seed works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('angular2-login-seed works!');
  }));
});
