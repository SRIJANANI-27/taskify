import { Component,HostListener } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-asidenav',
  templateUrl: './asidenav.component.html',
  styleUrl: './asidenav.component.scss'
})
export class AsidenavComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  loggedInUsername!: string;

  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
  }
 
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const clickedInside = sidebar.contains(event.target as Node);
    if (!clickedInside) {
      // Click occurred outside the sidebar, so close it
      this.closeSidebar();
    }
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }
  }

