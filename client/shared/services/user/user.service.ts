import { Injectable } from '@angular/core';
import { Control } from '@angular/common';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Import interfaces that service depends on
 */
import { User } from './user';

@Injectable()
export class UserService {
  constructor (private http: Http) {
    
  }

  private _apiBase = '/api/users';
  private _loginApi = '/authorize/local';
  private _registerApi = this._apiBase + '/register';
  private _userExistsApi = this._apiBase + '/exists';
  
  login(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this._loginApi, body, {headers: headers})
                    .map((res: Response) => res)
                    .catch(this.handleError);
  }
  
  register(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this._registerApi, body, {headers: headers})
                    .map((res: Response) => res)
                    .catch(this.handleError);
  }
  
  getUsers() {
    return this.http.get(this._apiBase + "?limit=5&desc=true")
                  .toPromise()
                  .then(res => <User[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
  }
  
  getMe() {
    return this.http.get(this._apiBase + '/me/')
                  .toPromise()
                  .then(res => <User> res.json().me, this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
  }
  
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    return Observable.throw(error || "Server Error");
  }
}