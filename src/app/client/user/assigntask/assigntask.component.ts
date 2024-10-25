import { Component, OnInit} from '@angular/core';
import { AssigningtaskService } from '../../../service/assigningtask.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrl: './assigntask.component.scss'
})
export class AssigntaskComponent implements OnInit {

  submissions!: any[];
constructor(private api:AssigningtaskService,private userservice:SessionhandlingService){}
loggedInUsername!: string;
endDateList: string[] = []; // Assuming endDate is a string, adjust the type accordingly

ngOnInit(): void {
  this.api.getEmployee().subscribe(res=>{    
    this.submissions=res;
    


  })
  
  this.loggedInUsername = this.userservice.getLoggedInUsername() || '';
   

  
}

}

