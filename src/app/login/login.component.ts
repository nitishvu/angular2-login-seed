import { Component, OnInit, OnDestroy } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdSpinner } from '@angular2-material/progress-circle';

import { USER_STATUS_CODES } from '../shared/services/user/user-status-codes';
import { UserService } from '../shared/services/user/user.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton, MdInput, MdSpinner, REACTIVE_FORM_DIRECTIVES]
})

export class LoginComponent implements OnInit, OnDestroy {
  title = 'Login';
  googleLink = '/authorize/google';
  twitterLink = '/authorize/twitter';
  githubLink = 'https://github.com/domfarolino/angular2-login-seed';
  registerLink = '/register';
  
  authenticatedObs: Observable<boolean>;
  userServiceSub: Subscription;
  authSub: Subscription;
  
  username: FormControl;
  password: FormControl;
  form: FormGroup;
  
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
    this.username = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)]));
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)]));

    this.form = new FormGroup({
      'username': this.username,
      'password': this.password,
    });
  }
  
  authenticated(): Observable<boolean> {
    if (this.authenticatedObs) return this.authenticatedObs;
    this.authenticatedObs = this._userService.authenticated()
      .map(data => {return data.authenticated});
    return this.authenticatedObs;
  }
  
  openAuthWindow(provider: string) {
    /**
     * Total hack until new router is used (for authentication and activation logic)
     */    
    var newWindow = window.open("https://angular2-login-seed.herokuapp.com/authorize/" + provider, 'name', 'height=585, width=770');
	   if (window.focus) {
       newWindow.focus();
     }
     
     let source = Observable.interval(2000)
      .map(() => {
        this.userServiceSub = this.authenticated().subscribe(data => {
          if (data) {
          this._router.navigate(['/']);
          newWindow.close();
        }
       })
    })
    
    if (this.authSub) this.authSub.unsubscribe();
    this.authSub = source.subscribe();

  }
  
  repository() {
    window.location.href = this.githubLink;
  }
  
  register() {
    this._router.navigate(['/register']);
  }
  
  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.submitted = true;
    this.errorDiagnostic = null;
    
    this._userService.login(this.form.value).subscribe(data => {
      this._router.navigate(['/']);
    },
    error => {
      this.submitted = false;
      this.errorDiagnostic = USER_STATUS_CODES[error.status] || USER_STATUS_CODES[500];
    });
  }
  
  ngOnDestroy() {
    if (this.userServiceSub) this.userServiceSub.unsubscribe();
    if (this.authSub) this.authSub.unsubscribe();
  }
  
}