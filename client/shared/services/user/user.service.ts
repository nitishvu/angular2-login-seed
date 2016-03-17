import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * Import interfaces that service depends on
 */
import { User } from './user';

@Injectable()
export class UserService {
  constructor (private http: Http) { }

  private _baseUrl = '/api/users';

  getUsers() {
    return this.http.get(this._baseUrl)
                  .toPromise()
                  .then(res => <User[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
    }
  
  getMe() {
    return this.http.get(this._baseUrl + '/me/')
                  .toPromise()
                  .then(res => <User> res.json().me, this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
    }
  
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}