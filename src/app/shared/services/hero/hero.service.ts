import { Injectable, Inject } from '@angular/core'; // because we want to be able to inject our hero service
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Import interfaces that service depends on
 */
import { Hero } from './hero';

@Injectable()
export class HeroService {
  constructor (private http: Http, @Inject('apiBase') private _apiBase: string) {}

  private _heroesUrl = this._apiBase + '/api/heroes';

  getHeroes () {
    return this.http.get(this._heroesUrl, <RequestOptionsArgs> {withCredentials: true})
                  .map(res => <Hero[]> res.json(), this.handleError)
                  .map(data => { console.log(data); return data; }); // eyeball results in the console
    }

  getHero(id: number) {
    return this.getHeroes().map(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
