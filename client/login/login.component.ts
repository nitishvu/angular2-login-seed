import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators, ControlGroup, Control } from '@angular/common';
import { Router } from '@angular/router-deprecated';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdSpinner } from '@angular2-material/progress-circle';

import { USER_STATUS_CODES } from '../shared/services/user/user-status-codes';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'login',
  templateUrl: 'client/login/login.component.html',
  styleUrls: ['client/login/login.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdInput, MdSpinner]
})

export class LoginComponent implements OnInit {
  title = 'Login';
  googleLink = '/authorize/google';
  twitterLink = '/authorize/twitter';
  githubLink = 'https://github.com/domfarolino/angular2-login-seed';
  
  username: Control;
  password: Control;
  form: ControlGroup;
  submitted: boolean = false;
  error: boolean = false;
  diagnostic: string;
  
  constructor(private _userService: UserService, private _router: Router) {

  }
  
  ngOnInit() {
    this.username = new Control('Username', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)]));
    this.password = new Control('Password', Validators.required);

    this.form = new ControlGroup({
      username: this.username,
      password: this.password,
    });
  }
  
  userModel = {
    "username": "",
    "password": ""
  }
  
  googleLogin() {
    window.location.href = this.googleLink;
  }
  
  twitterLogin() {
    window.location.href = this.twitterLink;
  }
  
  repository() {
    window.location.href = this.githubLink;
  }
  
  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.submitted = true;
    this.error = false;
    
    this._userService.login(this.userModel).subscribe(data => {
      this._router.navigateByUrl('/users');
    },
    error => {
      this.submitted = false;
      this.error = true;
      this.diagnostic = USER_STATUS_CODES[error.status] || USER_STATUS_CODES[500];
    });
  }
  
}