System.register(['@angular/core', '@angular2-material/card'], function(exports_1, context_1) {
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
    var core_1, card_1;
    var UserBadgeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            UserBadgeComponent = (function () {
                //@Output() deleteRequest = new EventEmitter<Hero>();
                function UserBadgeComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], UserBadgeComponent.prototype, "name", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], UserBadgeComponent.prototype, "img", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], UserBadgeComponent.prototype, "selected", void 0);
                UserBadgeComponent = __decorate([
                    core_1.Component({
                        selector: 'user-badge',
                        templateUrl: 'client/users/user-badge.component.html',
                        styleUrls: ['client/users/user-badge.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserBadgeComponent);
                return UserBadgeComponent;
            }());
            exports_1("UserBadgeComponent", UserBadgeComponent);
        }
    }
});
//# sourceMappingURL=user-badge.component.js.map