System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var USER_STATUS_CODES;
    return {
        setters:[],
        execute: function() {
            /**
             * Simple dictionary mapping
             * API request responses with
             * diagnostic user interface
             * strings
             */
            exports_1("USER_STATUS_CODES", USER_STATUS_CODES = {
                400: "User already exists",
                401: "Invalid credentials",
                500: "Something went wrong..."
            });
        }
    }
});
//# sourceMappingURL=user-status-codes.js.map