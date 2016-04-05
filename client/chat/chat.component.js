System.register(['angular2/core', '@angular2-material/card', '@angular2-material/button'], function(exports_1, context_1) {
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
    var core_1, card_1, button_1;
    var ChatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            }],
        execute: function() {
            ChatComponent = (function () {
                function ChatComponent() {
                    this.socket = io('http://localhost:5001');
                    this.socket.on('messages', function (messages) {
                        this.messages = messages;
                    }.bind(this));
                    this.socket.on('new-message', function (newMessage) {
                        if (this.messages.length > 8)
                            this.messages.shift();
                        this.messages.push(newMessage);
                    }.bind(this));
                }
                ChatComponent.prototype.sendMessage = function () {
                    this.socket.emit('send-message', this.messageText);
                    this.messageText = '';
                };
                ChatComponent = __decorate([
                    core_1.Component({
                        selector: 'chat',
                        templateUrl: 'client/chat/chat.component.html',
                        styleUrls: ['client/chat/chat.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChatComponent);
                return ChatComponent;
            }());
            exports_1("ChatComponent", ChatComponent);
        }
    }
});
//# sourceMappingURL=chat.component.js.map