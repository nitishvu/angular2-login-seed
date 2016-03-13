System.register(['angular2/core', '../shared/services/user/user.service', '../shared/components/quick-card/quick-card.component'], function(exports_1, context_1) {
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
    var core_1, user_service_1, quick_card_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (quick_card_component_1_1) {
                quick_card_component_1 = quick_card_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService) {
                    this._userService = _userService;
                    this.title = 'Users Component';
                }
                UsersComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                UsersComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers().then(function (users) { return _this.users = users; });
                };
                UsersComponent.prototype.onSelect = function (user) {
                    if (user == this.selectedUser) {
                    }
                    else {
                        this.selectedUser = user;
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: 'client/users/users.component.html',
                        styleUrls: ['client/home-root/home-root.component.css', 'client/users/users.component.css'],
                        directives: [quick_card_component_1.QuickCardComponent],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map