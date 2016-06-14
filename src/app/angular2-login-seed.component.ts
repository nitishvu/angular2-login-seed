import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRootComponent } from './home-root/home-root.component';

import { UserService } from './shared/services/user/user.service';

@Component({
  moduleId: module.id,
  selector: 'angular2-login-seed-app',
  templateUrl: 'angular2-login-seed.component.html',
  styleUrls: ['angular2-login-seed.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, UserService]
})

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent
  },
  {
    path: '/...',
    name: 'HomeRoot',
    component: HomeRootComponent
  },
])

export class Angular2LoginSeedAppComponent {
  title = "Dom Farolino Personal Web App"
}