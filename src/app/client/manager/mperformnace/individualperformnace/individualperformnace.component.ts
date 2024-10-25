import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../../service/sessionhandling.service';

@Component({
  selector: 'app-individualperformnace',
  templateUrl: './individualperformnace.component.html',
  styleUrl: './individualperformnace.component.scss'
})
export class IndividualperformnaceComponent {
  listItems = [
    { name: 'Janani', subname: 'srija', image: '../assets/images/chat1.png', color: 'primary', content: 'Collapse content for Janani', isOpen: false },
    { name: 'SriJanani', subname: 'srija', image: '../assets/images/chat4.png', color: 'secondary', content: 'Collapse content for SriJanani', isOpen: false },
    // Add more items as needed
  ];

  projects = [
    { id: 1, title: 'Project Alpha', progress: 25, members: ['John', 'Alice', 'Bob'] },
    { id: 2, title: 'Project Beta', progress: 50, members: ['Emily', 'David'] },
    { id: 3, title: 'Project Gamma', progress: 75, members: ['Sarah', 'Michael'] },

  ];
  projectss = [
    { id: 1, title: 'Project A', progress: 80, members: ['John', 'Alice'] },
    { id: 2, title: 'Project B', progress: 50, members: ['Emily', 'David'] },
  ];


  
  counts: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Initialize counts array with 0 for nine counters
intervals: any[] = []; // Array to hold interval references
stopValues: number[] = [50, 30, 100, 180, 40, 200, 400, 80, 500]; // Stop values for each counter
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
    for (let i = 0; i < this.counts.length; i++) {
    const interval = setInterval(() => this.updateCount(i), 10);
    this.intervals.push(interval);
  }
  }

  updateCount(index: number): void {
    // Increment the count 
    this.counts[index]++;

    // Check if the count has reached the stop value for the specific counter
    if (this.counts[index] === this.stopValues[index]) {
      clearInterval(this.intervals[index]); // Stop the interval
    }
  }
 
  showFirstContent: boolean = true;
  showSecondContent: boolean = false;
  showThirdContent: boolean = false;

  showFirst() {
    this.showFirstContent = true;
    this.showSecondContent = false;
    this.showThirdContent = false;
  }

  showSecond() {
    this.showFirstContent = false;
    this.showSecondContent = true;
    this.showThirdContent = false;

  }
  showThird(){
    this.showFirstContent = false;
    this.showSecondContent = false;
    this.showThirdContent = true;
  }
}
  
  


  


  

