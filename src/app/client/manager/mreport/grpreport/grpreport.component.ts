import { Component, ElementRef} from '@angular/core';
import { SessionhandlingService } from '../../../../service/sessionhandling.service';
@Component({
  selector: 'app-grpreport',
  templateUrl: './grpreport.component.html',
  styleUrl: './grpreport.component.scss'
})
export class GrpreportComponent {
  loggedInUsername!: string;
  renderer: any;
 
  constructor(private userService: SessionhandlingService, private elRef: ElementRef) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }
  rows: any[] = [
    { id: 1, name: 'ramya', task: 'tutorial', completed: 5, workHours: '6hrs', progress: '40%', performance: '89%', status: 'Completed' },
    { id: 2, name: 'kavya thera', task: 'issue tracking', completed: 7, workHours: '9hrs', progress: '30%', performance: '69%', status: 'pending' },
    // Add more rows if needed
  ];

  deleteRow(event: MouseEvent): void {
    const row = (event.target as HTMLElement).closest('tr');
    if (row) {
      row.remove();
    }
  }
}
