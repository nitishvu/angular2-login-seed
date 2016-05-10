System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', '@angular2-material/button', '@angular2-material/toolbar', '@angular2-material/sidenav', '@angular2-material/list', '@angular2-material/icon', '../shared/services/user/user.service', '../shared/services/hero/hero.service', '../users/users.component', '../heroes/heroes.component', '../hero-detail/hero-detail.component', '../dashboard/dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_deprecated_1, button_1, toolbar_1, sidenav_1, list_1, icon_1, user_service_1, hero_service_1, users_component_1, heroes_component_1, hero_detail_component_1, dashboard_component_1;
    var HomeRootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            HomeRootComponent = (function () {
                function HomeRootComponent(_userService) {
                    this._userService = _userService;
                    this.title = 'Home Root Component';
                }
                HomeRootComponent.prototype.ngOnInit = function () {
                    this.getMe();
                };
                HomeRootComponent.prototype.logout = function () {
                    window.location.href = '/logout';
                };
                HomeRootComponent.prototype.getMe = function () {
                    var _this = this;
                    this._userService.getMe().then(function (me) {
                        _this.me = me;
                        _this.name = _this.me.name;
                        _this.username = _this.me.username;
                        _this.profile_picture = _this.me.profile_picture;
                    });
                };
                HomeRootComponent = __decorate([
                    core_1.Component({
                        selector: 'home-root',
                        templateUrl: 'client/home-root/home-root.component.html',
                        styleUrls: ['client/home-root/home-root.component.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar, sidenav_1.MD_SIDENAV_DIRECTIVES, icon_1.MdIcon, list_1.MD_LIST_DIRECTIVES, button_1.MdButton],
                        providers: [user_service_1.UserService, hero_service_1.HeroService, icon_1.MdIconRegistry, http_1.HTTP_PROVIDERS]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/users',
                            name: 'Users',
                            component: users_component_1.UsersComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], HomeRootComponent);
                return HomeRootComponent;
            }());
            exports_1("HomeRootComponent", HomeRootComponent);
        }
    }
});
//# sourceMappingURL=home-root.component.js.map