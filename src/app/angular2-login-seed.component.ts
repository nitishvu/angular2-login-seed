import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRootComponent } from './home-root/home-root.component';

@Component({
  moduleId: module.id,
  selector: 'angular2-login-seed-app',
  templateUrl: 'angular2-login-seed.component.html',
  styleUrls: ['angular2-login-seed.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class Angular2LoginSeedAppComponent {
  title = "Dom Farolino Personal Web App"
}