import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/services/hero/hero';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['../home-root/home-root.component.css', '../hero-detail.component.css'],
  inputs: ['hero']
})

export class HeroDetailComponent implements OnInit, OnDestroy {
  selectedId: number;
  hero: Hero;
  sub: Subscription;

  constructor(private _router: Router) {

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
