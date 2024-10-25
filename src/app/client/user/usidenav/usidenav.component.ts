import { Component, HostListener, ElementRef } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-usidenav',
  templateUrl: './usidenav.component.html',
  styleUrl: './usidenav.component.scss'
})
export class UsidenavComponent {
  isSidebarOpen = false;
  constructor(private userService: SessionhandlingService,private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const sidebar = this.elementRef.nativeElement.querySelector('#sidebar');
    if (!sidebar.contains(event.target)) {
      this.isSidebarOpen = false;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  loggedInUsername!: string;
 

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
