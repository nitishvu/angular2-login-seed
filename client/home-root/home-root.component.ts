import { Component, OnInit } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { User } from  '../shared/services/user/user';
import { UserService } from  '../shared/services/user/user.service';
import { HeroService } from  '../shared/services/hero/hero.service';

import { UsersComponent } from '../users/users.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MapComponent } from '../map/map.component';

@Component({
    selector: 'home-root',
    templateUrl: 'client/home-root/home-root.component.html',
    styleUrls: ['client/home-root/home-root.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, HeroService, HTTP_PROVIDERS]
})

@RouteConfig([
  {
    path: '/users',
    name: 'Users',
    component: UsersComponent,
    useAsDefault: true
  },
    {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/map',
    name: 'MapComponent',
    component: MapComponent
  }
])

export class HomeRootComponent implements OnInit {
  me: User;
  name: string;
  username: string;
  profile_picture: string;
  
  constructor(private _userService: UserService) {

  }
  
  ngOnInit() {
    this.getMe();
  }
  
  getMe() {
    this._userService.getMe().then(me => {
      this.me = me;
      this.name = this.me.name;
      this.username = this.me.username;
      this.profile_picture = this.me.profile_picture;
    });
  }
  
  title = 'Home Root Component';
}