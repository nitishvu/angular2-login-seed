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
  selector: 'register',
  templateUrl: 'client/register/register.component.html',
  styleUrls: ['client/register/register.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdInput, MdSpinner]
})

export class RegisterComponent implements OnInit {
  title = 'Register';
  githubLink = 'https://github.com/domfarolino/angular2-login-seed';
  
  name: Control;
  username: Control;
  email: Control;
  password: Control;
  form: ControlGroup;
  
  submitted: boolean = false;
  error: boolean = false;
  diagnostic: string;
  
  constructor(private _userService: UserService, private _router: Router) {

  }
  
  ngOnInit() {
    this.name = new Control('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)]));
    this.username = new Control('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)]));
    this.email = new Control('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(32)]));

    this.form = new ControlGroup({
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
  
  login() {
    this._router.navigateByUrl('/login');
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
    
    this._userService.register(this.form.value).subscribe(data => {
      this._router.navigateByUrl('/login');
    },
    error => {
      this.submitted = false;
      this.error = true;
      this.diagnostic = USER_STATUS_CODES[error.status] || USER_STATUS_CODES[500];
    });
  }
  
}