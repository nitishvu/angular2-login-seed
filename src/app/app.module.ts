import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { MdCard } from '@angular2-material/card';
import { MdToolbar, MdToolbarRow } from '@angular2-material/toolbar';
import { MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';
import { MdList, MdListItem } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UsersComponent } from './users/users.component';
import { UserBadgeComponent } from './users/user-badge.component';
import { QuickCardComponent } from './shared/components/quick-card/quick-card.component';

import { UserService } from './shared/services/user/user.service';
import { HeroService } from './shared/services/hero/hero.service';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    MdToolbar,
    MdToolbarRow,
    MdSidenav,
    MdSidenavLayout,
    MdList,
    MdListItem,
    MdButton,
    MdIcon
  ],
  providers: [MdIconRegistry, HeroService, UserService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
