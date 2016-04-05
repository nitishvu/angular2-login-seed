import { Component } from 'angular2/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

@Component({
    selector: 'login',
    templateUrl: 'client/login/login.component.html',
    styleUrls: ['client/login/login.component.css'],
    directives: [MD_CARD_DIRECTIVES, MdButton]
})

export class LoginComponent{
  constructor() { }
  
  title = 'Login';
  googleLink = '/authorize/google';
  twitterLink = '/authorize/twitter';
}