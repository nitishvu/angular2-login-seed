import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LoginComponent } from '../login/login.component';
import { HomeRootComponent } from '../home-root/home-root.component';

@Component({
  selector: 'my-app',
  templateUrl: 'client/app/app.component.html',
  styleUrls: ['client/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
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
  }
])

export class AppComponent {
  constructor() { }
  title = "Dom Farolino Personal Web App"
}