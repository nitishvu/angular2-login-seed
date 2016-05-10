import { Component, OnInit } from '@angular/core';
//import { RouteSegment } from '@angular/router';
import { RouteParams } from '@angular/router-deprecated';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'client/hero-detail/hero-detail.component.html',
  styleUrls: ['client/home-root/home-root.component.css', 'client/hero-detail/hero-detail.component.css'],
  inputs: ['hero'],
  directives: [MdButton, MdInput, MD_CARD_DIRECTIVES]
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {

  }
  
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    let id = +this._routeParams.get('id');
    //let id = +this._routeParams.urlSegments['id'];
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
  
  title = 'Hero Detail Component'
}