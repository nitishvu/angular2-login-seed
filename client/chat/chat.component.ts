import { Component } from 'angular2/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

@Component({
    selector: 'chat',
    templateUrl: 'client/chat/chat.component.html',
    styleUrls: ['client/chat/chat.component.css'],
    directives: [MD_CARD_DIRECTIVES, MdButton]
})

export class ChatComponent {
  price: number;
  socket: any;
  
  messageText: string;
  messages: Array<string>;

  constructor(){
    this.socket = io();
    
    this.socket.on('messages', function(messages){
      this.messages = messages;
    }.bind(this));
    
    this.socket.on('new-message', function(newMessage){
      if (this.messages.length > 8) this.messages.shift();
      this.messages.push(newMessage);
    }.bind(this));

  }
  
  sendMessage() {
    this.socket.emit('send-message', this.messageText);
    this.messageText = '';
  }
}