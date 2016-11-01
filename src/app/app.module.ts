import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { MdCard, MdCardContent, MdCardSubtitle, MdCardTitle } from '@angular2-material/card';
import { MdToolbar, MdToolbarRow } from '@angular2-material/toolbar';
import { MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';
import { MdList, MdListItem } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdSpinner } from '@angular2-material/progress-circle';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UsersComponent } from './users/users.component';
import { UserBadgeComponent } from './users/user-badge.component';
import { QuickCardComponent } from './shared/components/quick-card/quick-card.component';

import { HomeRootComponentGuard } from './home-root/home-root.guard';
import { UnauthenticatedGuard } from './unauthenticated.guard';

import { UserService } from './shared/services/user/user.service';
import { HeroService } from './shared/services/hero/hero.service';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    HeroDetailComponent,
    HeroesComponent,
    UsersComponent,
    UserBadgeComponent,
    QuickCardComponent,
    MdCard,
    MdCardContent,
    MdInput,
    MdCardSubtitle,
    MdCardTitle,
    MdToolbar,
    MdToolbarRow,
    MdSidenav,
    MdSidenavLayout,
    MdList,
    MdListItem,
    MdButton,
    MdIcon,
    MdSpinner
  ],
  providers: [HomeRootComponentGuard,
              UnauthenticatedGuard,
              MdIconRegistry,
              HeroService,
              UserService,
              HeroService,
              {provide: 'apiBase', useValue: 'https://angular2-login-seed.herokuapp.com'}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
