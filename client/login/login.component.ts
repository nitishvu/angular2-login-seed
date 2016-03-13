import { Component } from 'angular2/core';

@Component({
    selector: 'login',
    templateUrl: 'client/login/login.component.html',
    styleUrls: ['client/login/login.component.css']
})

export class LoginComponent{
  constructor() { }
  
  title = 'Login';
  googleLink = '/authorize/google';
  twitterLink = '/authorize/twitter';
}