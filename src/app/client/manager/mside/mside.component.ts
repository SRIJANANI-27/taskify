import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-mside',
  templateUrl: './mside.component.html',
  styleUrl: './mside.component.scss'
})
export class MsideComponent {
  loggedInUsername!: string;
  isSidebarOpen = false;
  constructor(private userService: SessionhandlingService) { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  
  
  }
  ngOnInit():void{
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';

  }
}
