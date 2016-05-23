import { Injectable } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * Import interfaces that service depends on
 */
import { User } from './user';

@Injectable()
export class UserService {
  constructor (private http: Http) { }

  private _apiBaseUrl = '/api/users';
  private _loginUrl = '/authorize/local';
  
  login(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this._loginUrl, body, {headers: headers})
                    .map((res: Response) => res)
                    .catch(this.handleError);
  }
  
  getUsers() {
    return this.http.get(this._apiBaseUrl + "?limit=5&desc=true")
                  .toPromise()
                  .then(res => <User[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
    }
  
  getMe() {
    return this.http.get(this._apiBaseUrl + '/me/')
                  .toPromise()
                  .then(res => <User> res.json().me, this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
    }
  
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    //if(error.status == 401) return Observable.of(error);
    return Observable.throw(error || "Server Error");
  }
}