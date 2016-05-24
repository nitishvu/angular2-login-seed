import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeRootComponent } from '../home-root/home-root.component';

import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'client/app/app.component.html',
  styleUrls: ['client/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, UserService]
})

@RouteConfig([
  {
    path: '/...',
    name: 'HomeRoot',
    component: HomeRootComponent,
    useAsDefault: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent
  }
])

export class AppComponent {
  constructor() { }
  title = "Dom Farolino Personal Web App"
}