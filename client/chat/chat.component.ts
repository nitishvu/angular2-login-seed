import { Component } from 'angular2/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

import { User } from  '../shared/services/user/user';
import { UserService } from  '../shared/services/user/user.service';

@Component({
    selector: 'chat',
    templateUrl: 'client/chat/chat.component.html',
    styleUrls: ['client/chat/chat.component.css'],
    directives: [MD_CARD_DIRECTIVES, MdButton],
    providers: [UserService]
})

export class ChatComponent {
  price: number;
  socket: any;
  
  messageText: string;
  messages: Array<Object> = [];

  constructor(private _userService: UserService){
    this.socket = io();
    
    // this.socket.on('messages', function(messages){
    //   this.messages = messages;
    // }.bind(this));
    
    this.socket.on('new-message', function(messageInfo){
      if (this.messages.length > 8) this.messages.shift();
      this.messages.push(messageInfo);
    }.bind(this));

  }
  
  sendMessage() {
    this.socket.emit('send-message', {"message": this.messageText, "userImage": this._userService.getMe().then(me => {
      
    })});
    this.messageText = '';
  }
}