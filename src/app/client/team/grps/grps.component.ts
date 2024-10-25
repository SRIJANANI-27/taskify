import Swal from 'sweetalert2';
import { Component} from '@angular/core';
import { CollaborationService } from '../../../service/collaboration.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-grps',
  templateUrl: './grps.component.html',
  styleUrl: './grps.component.scss'
})
export class GrpsComponent {
  
  collaboratedData: any[] = [
    { id: 1, task: 'Complete Project X', project: 'Project A', progress: '70%', assignee: 'karthik', collaborated: false },
    { id: 2, name: 'Jane Smith', task: 'Review Documentation', project: 'Project B', progress: '50%', assignee: 'Alice', collaborated: false },
    // Add more rows as needed
  ];

  collaborateClicked(row: any) {
    row.collaborated = !row.collaborated; // Toggle the collaboration status
  }
  loggedInUsername!: string;
  // collaboratedData: any[] = [];

  constructor(private userService: SessionhandlingService,private collaborationService:CollaborationService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
    this.collaborationService.collaboratedData$.subscribe(data => {
      this.collaboratedData = data;
    });
  }

  deleteRow(index: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: 250,
    }).then((result) => {
      if (result.isConfirmed) {
        this.collaboratedData.splice(index, 1);
        Swal.fire({
          title: "<span style='font-size: 20px;'>Deleted!</span>",
          text: "Not collaborated",
          icon: "success",
         width:200,
         heightAuto:false, // Disable automatic height adjustment
      });
      }
    });
  }

  
  selectedRow: any; 
  buttonState:any;
  // toggleDetails(row: any, state: string): void {
  //   if (this.selectedRow === row && this.buttonState === state) {
  //     this.selectedRow = null;
  //     this.buttonState = '';
  //   } else {
  //     this.selectedRow = row;
  //     this.buttonState = state;
  //   }
  // }
  showContent: { [key: string]: boolean } = {};

  cardData: any[] = [
    {
      name: 'Jana',
      team: 'Team Lead',
      description: 'Frontend developer',
      skill: 'Frontend',
      skillLevel: 70,
      tskillLevel: 30,
      image: '../../../assets/images/chat5',
      tname:'Sri',
      tskill:'Angular',
      t2skill:'Datascience',
      t2name:'Harina',
      t3name:'Sachin',
      t4name:'Praveen'
      

    },
    {
      name: 'Giri',
      team: 'Team Lead',
      description: 'Lorem, ipsum dolor sit amet',
      skill: 'Backend',
      skillLevel: 55,
      tskillLevel: 25,
      image: '../../../assets/images/chat2.png',
      tname:'Ramya',
      tskill:'React',
      t2skill:'Java',
      t2name:'Thiyaga',
      t3name:'Siva',
      t4name:'Shankar',
      

    },
    {
      name: 'Shiva',
      team: 'Team Lead',
      description: 'Lorem, ipsum dolor sit amet',
      skill: 'Bigdata',
      skillLevel: 35,
      tskillLevel: 95,
      image: '../../../assets/images/chat3.png',
      tname:'Priya',
      tskill:'Fullstack',
      t2skill:'Python',
      t2name:'Dhanushya',
      t3name:'Soundammal',
      t4name:'Aravinth',
      
    },
    
  ];

  buttons: number[] = [0, 1, 2]; // Assuming you have 5 cards in cardData
  displayedCardData: any[] = []; // Array to hold displayed card data

  showMessage(index: number) {
    this.displayedCardData = [this.cardData[index]]; // Display only the selected card
  }


}
