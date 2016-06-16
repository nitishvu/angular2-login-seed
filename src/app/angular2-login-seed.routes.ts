import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRootRoutes } from './home-root/home-root.routes';
import { HomeRootComponentGuard } from './home-root/home-root.guard';

const routes: RouterConfig = [
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  ...HomeRootRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes), HomeRootComponentGuard
];