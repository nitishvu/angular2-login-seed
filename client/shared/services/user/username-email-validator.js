System.register(['@angular/http', '@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, core_1, Rx_1;
    var UsernameEmailValidator;
    /**
     * The point of this function and file is to act as
     * an asynchronous username and email validator used
     * in the following fashion:
     *
     * new Control('', SyncValidator, AsyncValidator) where
     * Async Validator is the public static method of the class
     * in this file. This file is currently not in use since
     * debounceTime on asynchronous validators doesn't seem to
     * work properly right now . Ssee https://github.com/angular/angular/issues/6895#issuecomment-221765955)
     * which explains the problems me and @babeal ran into when
     * debouncing and asynchronous control validator.
     */
    function checkUser(field, control) {
        // Return an observable with null if the
        // username or email doesn't yet exist, or
        // an object with the rejection reason if they do
        var injector = core_1.ReflectiveInjector.resolveAndCreate([http_1.HTTP_PROVIDERS]);
        var http = injector.get(http_1.Http);
        return new Rx_1.Observable(function (obs) {
            control
                .valueChanges
                .debounceTime(300)
                .flatMap(function (value) { return http.get("/api/users/exists?field=" + field + "&value=" + control.value).map(function (res) { return res.json(); }); })
                .subscribe(function (data) {
                console.log(data.exists);
                obs.next(null);
                obs.complete();
            }, function (error) {
                var message = error.json().message;
                var reason;
                if (message === 'Username taken') {
                    reason = 'usernameTaken';
                }
                if (message === 'Email taken') {
                    reason = 'emailTaken';
                }
                obs.next((_a = {}, _a[reason] = true, _a));
                obs.complete();
                var _a;
            });
        });
    }
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            UsernameEmailValidator = (function () {
                function UsernameEmailValidator() {
                }
                /**
                 * Public control validators
                 */
                UsernameEmailValidator.checkUsername = function (control) {
                    return checkUser('username', control);
                };
                UsernameEmailValidator.checkEmail = function (control) {
                    return checkUser('email', control);
                };
                return UsernameEmailValidator;
            }());
            exports_1("UsernameEmailValidator", UsernameEmailValidator);
        }
    }
});
//# sourceMappingURL=username-email-validator.js.map