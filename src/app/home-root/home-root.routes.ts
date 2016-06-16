import { HomeRootComponent } from './home-root.component';
import { HomeRootComponentGuard } from './home-root.guard';
import { UsersComponent } from '../users/users.component';

export const HomeRootRoutes = [
  {
    path: '/',
    component: HomeRootComponent,
    canActivate: [HomeRootComponentGuard],
    children: [
      { path: '/', component: UsersComponent }
    ]
  }
];