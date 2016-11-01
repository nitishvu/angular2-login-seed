import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['../home-root/home-root.component.css', './heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _heroService: HeroService,
    private _router: Router) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  title = 'Tour of Heroes';

  onSelect(hero: Hero) {
    if(hero == this.selectedHero) {
      //this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }

  goToDetail() {
    this._router.navigate(['/detail'], { queryParams: { id: `${this.selectedHero.id}`} });
  }
}
