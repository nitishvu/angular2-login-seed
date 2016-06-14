System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '@angular2-material/button', '@angular2-material/input', '@angular2-material/card', '@angular2-material/progress-circle', '../shared/services/user/user-status-codes', '../shared/services/user/user.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, button_1, input_1, card_1, progress_circle_1, user_status_codes_1, user_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (progress_circle_1_1) {
                progress_circle_1 = progress_circle_1_1;
            },
            function (user_status_codes_1_1) {
                user_status_codes_1 = user_status_codes_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_userService, _router) {
                    this._userService = _userService;
                    this._router = _router;
                    this.title = 'Login';
                    this.googleLink = '/authorize/google';
                    this.twitterLink = '/authorize/twitter';
                    this.githubLink = 'https://github.com/domfarolino/angular2-login-seed';
                    this.registerLink = '/register';
                    /**
                     * Boolean used in telling the UI
                     * that the form has been submitted
                     * and is awaiting a response
                     */
                    this.submitted = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.username = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3), common_1.Validators.maxLength(64)]));
                    this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3), common_1.Validators.maxLength(32)]));
                    this.form = new common_1.ControlGroup({
                        username: this.username,
                        password: this.password,
                    });
                };
                LoginComponent.prototype.googleLogin = function () {
                    window.location.href = this.googleLink;
                };
                LoginComponent.prototype.twitterLogin = function () {
                    window.location.href = this.twitterLink;
                };
                LoginComponent.prototype.repository = function () {
                    window.location.href = this.githubLink;
                };
                LoginComponent.prototype.register = function () {
                    this._router.navigateByUrl('/register');
                };
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    /**
                     * Innocent until proven guilty
                     */
                    this.submitted = true;
                    this.errorDiagnostic = null;
                    this._userService.login(this.form.value).subscribe(function (data) {
                        _this._router.navigateByUrl('/users');
                    }, function (error) {
                        _this.submitted = false;
                        _this.errorDiagnostic = user_status_codes_1.USER_STATUS_CODES[error.status] || user_status_codes_1.USER_STATUS_CODES[500];
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'client/login/login.component.html',
                        styleUrls: ['client/login/login.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton, input_1.MdInput, progress_circle_1.MdSpinner]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map