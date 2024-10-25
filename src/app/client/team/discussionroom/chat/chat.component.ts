import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../../service/sessionhandling.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messages: { text: string, time: string, sender: string }[] = [];
  avatarUrls = [
    
    "../assets/images/chat2.png"
  ];
  newMessage: string = '';

  

  sendMessage() {
    if (this.newMessage.trim() === '') return;
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const senderIndex = Math.floor(Math.random() * this.avatarUrls.length);
    this.messages.push({ text: this.newMessage, time: currentTime, sender: this.avatarUrls[senderIndex] });
    this.newMessage = ''; // Clear input after sending
  }

  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }
}
