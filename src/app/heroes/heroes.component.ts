import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { QuickCardComponent } from '../shared/components/quick-card/quick-card.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/home-root/home-root.component.css', 'app/heroes/heroes.component.css'],
    directives: [QuickCardComponent, HeroDetailComponent, MdButton],
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
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
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