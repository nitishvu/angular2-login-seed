import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail/hero-detail.component.html',
  styleUrls: ['app/home-root/home-root.component.css', 'app/hero-detail/hero-detail.component.css'],
  inputs: ['hero'],
  directives: [MdButton, MdInput, MD_CARD_DIRECTIVES]
})

export class HeroDetailComponent implements OnInit, OnDestroy {
  selectedId: number;
  hero: Hero;
  sub: Subscription;

  constructor(
    private _heroService: HeroService, private _router: Router) {

  }
  
  ngOnInit() {
    this.sub = this._router
      .routerState
      .queryParams
      .subscribe(params => {
        this.selectedId = +params['id'];
        this._heroService.getHero(this.selectedId)
          .then(hero => this.hero = hero);
      });
  }

  goBack() {
    window.history.back();
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  title = 'Hero Detail Component'
}