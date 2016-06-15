import { Injectable } from '@angular/core';
import { Control } from '@angular/common';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Import interfaces that service depends on
 */
import { User } from './user';

@Injectable()
export class UserService {
  constructor (private http: Http) {
    
  }

  private _apiBase = 'http://localhost:5000/api';
  private _loginApi =  'http://localhost:5000/authorize/local';
  private _registerApi = this._apiBase + '/users/register';
  private _userExistsApi = this._apiBase + '/users/exists';
  
  login(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this._loginApi, body, {headers: headers, withCredentials: true})
                    .map((res: Response) => res)
                    .catch(this.handleError);
  }
  
  register(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this._registerApi, body, {headers: headers, withCredentials: true})
                    .map((res: Response) => res)
                    .catch(this.handleError);
  }
  
  cookieTest() {
    return this.http.get(this._apiBase + '/cookieTest', <RequestOptionsArgs> {withCredentials: true})
                    .map((res: Response) => res)
                    .catch(this.handleError);
  }
  
  getUsers() {
    return this.http.get(this._apiBase + "/users?limit=5&desc=true", <RequestOptionsArgs> {withCredentials: true})
                  .toPromise()
                  .then(res => <User[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
  }
  
  getMe() {
    return this.http.get(this._apiBase + '/users/me/', <RequestOptionsArgs> {withCredentials: true})
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