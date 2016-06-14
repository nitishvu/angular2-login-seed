import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, ControlGroup, Control } from '@angular/common';
import { Router } from '@angular/router-deprecated';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdSpinner } from '@angular2-material/progress-circle';

import { USER_STATUS_CODES } from '../shared/services/user/user-status-codes';
import { UserService } from '../shared/services/user/user.service';

/**
 * Uncomment the below import when the debouncing asynchronous validators issue
 * get resolved.
 * See https://github.com/angular/angular/issues/6895#issuecomment-221765955 
 */

// import { UsernameEmailValidator } from '../shared/services/user/username-email-validator';

@Component({
  selector: 'register',
  templateUrl: 'app/register/register.component.html',
  styleUrls: ['app/register/register.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdInput, MdSpinner]
})

export class RegisterComponent implements OnInit {
  title = 'Register';
  loginLink = '/login';
  githubLink = 'https://github.com/domfarolino/angular2-login-seed';
 
  name: Control;
  username: Control;
  email: Control;
  password: Control;
  form: ControlGroup;
  
  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted: boolean = false;
  
  /**
   * Diagnostic message from received
   * form request error
   */
  errorDiagnostic: string;
  
  constructor(private _userService: UserService, private _router: Router) {

  }
  
  ngOnInit() {
    /**
     * Initialize form Controls
     */
    this.name = new Control('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)]));
    this.username = new Control('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)]));
    this.email = new Control('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(32)]));

    /**
     * Initialize form
     */
    this.form = new ControlGroup({
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
  
  login() {
    this._router.navigateByUrl(this.loginLink);
  }
  
  repository() {
    window.location.href = this.githubLink;
  }
  
  onSubmit() {
    /**
     * Innocent until proven guilty
     * (show nothing until the request completes)
     */
    this.submitted = true;
    this.errorDiagnostic = null;
    
    this._userService.register(this.form.value).subscribe(data => {
      this._router.navigateByUrl('/login');
    },
    error => {
      this.submitted = false;
      this.errorDiagnostic = USER_STATUS_CODES[error.status] || USER_STATUS_CODES[500];
    });
  }
  
}