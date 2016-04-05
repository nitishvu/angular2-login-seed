import { Component, OnInit } from 'angular2/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
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
import { ChatComponent } from '../chat/chat.component';

@Component({
    selector: 'home-root',
    templateUrl: 'client/home-root/home-root.component.html',
    styleUrls: ['client/home-root/home-root.component.css'],
    directives: [ROUTER_DIRECTIVES, MdToolbar, MdButton, MD_CARD_DIRECTIVES],
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
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatComponent
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