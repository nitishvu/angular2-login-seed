import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Angular2LoginSeedAppComponent, environment } from './app';
import { APP_ROUTER_PROVIDERS } from './app';
import { UserService } from './app/shared/services/user/user.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2LoginSeedAppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, UserService]);

