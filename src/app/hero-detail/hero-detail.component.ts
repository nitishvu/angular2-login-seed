import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Hero } from '../shared/services/hero/hero';
import { HeroService } from '../shared/services/hero/hero.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['../home-root/home-root.component.css', './hero-detail.component.css'],
  inputs: ['hero']
})

export class HeroDetailComponent implements OnInit, OnDestroy {
  selectedId: number;
  hero: Hero;
  sub: Subscription;

  constructor(private _heroService: HeroService, private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this._activatedRoute
      .queryParams
      .subscribe(params => {
        this.selectedId = +params['id'];
        this._heroService.getHero(this.selectedId)
          .subscribe(hero => this.hero = hero);
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
