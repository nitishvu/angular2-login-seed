import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
  //  this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
     this._heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));

  }

  goToDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
