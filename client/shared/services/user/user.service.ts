import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

/**
 * Import interfaces that service depends on
 */
import { User } from './user';

@Injectable()
export class UserService {
  
  private _baseUrl = '/api/users';
  
  private defaultMe: User = {
    "name": "",
    "username": "",
    "profile_picture": "",
    "last_active": 0
  }; 
  
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(this.defaultMe);
  
  constructor (private http: Http) {
    this.user.subscribe(this.getMe, this.handleError);
  }

  getUser() {
    return this.user.asObservable();
  }
  
  getMe() {
    return this.http.get(this._baseUrl + '/me/')
                .map((res) => {return res.json().me})
                .subscribe(data => this.user.next(data), err=> this.user.error(err));
  }
  
  getUsers() {
    return this.http.get(this._baseUrl + "?limit=5&desc=true")
                  .toPromise()
                  .then(res => <User[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); // eyeball results in the console
    }
  
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}