import { Component } from 'angular2/core';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'login',
  templateUrl: 'client/login/login.component.html',
  styleUrls: ['client/login/login.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton]
})

export class LoginComponent {
  title = 'Login';
  googleLink = '/authorize/google';
  twitterLink = '/authorize/twitter';
  
  constructor() { }
}