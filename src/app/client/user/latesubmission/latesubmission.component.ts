// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import Swal from 'sweetalert2';
// import { latesub } from './latesub';
// import { LatesubService } from '../../../service/latesub.service';
// import { SessionhandlingService } from '../../../service/sessionhandling.service';
// import { SubmissionService } from '../../../service/submission.service';
// import { AssigningtaskService } from '../../../service/assigningtask.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-latesubmission',
//   templateUrl: './latesubmission.component.html',
//   styleUrls: ['./latesubmission.component.scss']
// })
// export class LatesubmissionComponent implements OnInit {

//   projectForm!: FormGroup;
//   modelobj: latesub = new latesub();
//   latesub!: any[];
//   submission!: any[];
//   submissions!: any[];
//   employeeEndDate: string = '';
//   loggedInUsername!: string;
//   endDateList: string[] = []; // Assuming endDate is a string, adjust the type accordingly
//   DateList: string[] = [];

//   constructor(private fb: FormBuilder, private api: LatesubService, private userService: SessionhandlingService, private service: SubmissionService, private ser: AssigningtaskService, private http: HttpClient) { }

//   ngOnInit(): void {
//     this.loggedInUsername = this.userService.getLoggedInUsername() || '';

//     // Initialize form
//     this.projectForm = this.fb.group({
//       title: ['', [Validators.required]],
//       assignee: ['', [Validators.required]],
//       description: ['', [Validators.required]],
//       priority: ['', Validators.required],
//       date: ['', [Validators.required]]
//     });

//     // Load data
//     this.reloadUser();
//     this.getAllEmployee();
//     this.service.getEmployee().subscribe(res => {
//       this.submission = res;
//     });

//     this.ser.getEmployee().subscribe(res => {
//       // Assuming 'endDate' is the property name in the response object
//       this.endDateList = res.map(submission => submission.employeeEndDate);
//       console.log('End Dates:', this.endDateList);
//       this.runComparisonLoop();
//     });

//     this.service.getEmployee().subscribe(res => {
//       // Assuming 'endDate' is the property name in the response object
//       this.DateList = res.map(submission => submission.date);
//       console.log('Dates:', this.DateList);
//       this.runComparisonLoop();
//     });
//   }

//   runComparisonLoop() {
//     // Check if both endDateList and DateList are populated
//     if (this.endDateList && this.DateList) {
//       // Run the comparison loop
//       for (let i = 0; i < Math.min(this.endDateList.length, this.DateList.length); i++) {
//         const endDate = new Date(this.endDateList[i]);
//         const date = new Date(this.DateList[i]);

//         console.log('Index:', i);
//         console.log('Date:', date);
//         console.log('End Date:', endDate);

//         if (date < endDate) {
//           console.log('Employee Details:', this.latesub[i]); // Adjust this based on your data structure
//         }
//       }
//     }
//   }

//   onSubmit() {
//     if (this.projectForm.valid) {
//       this.projectForm.reset();
//     }
//   }

//   show() {
//     this.projectForm.reset();
//   }

//   onEdit(lateSubmission: any): void {
//     this.projectForm.patchValue({
//       title: lateSubmission.title,
//       assignee: lateSubmission.assignee,
//       date: lateSubmission.date
//     });
//   }

//   getAllEmployee(): void {
//     this.api.getEmployee().subscribe(
//       (res) => {
//         this.latesub = res;
//       },
//       () => {
//         alert("Error fetching employee data");
//       }
//     );
//   }

//   postEmployeeDetails(): void {
//     this.modelobj = this.projectForm.value;
//     this.api.postEmployee(this.modelobj).subscribe(
//       () => {
//         Swal.fire({
//           icon: "success",
//           title: "<span style='font-size: 19px'> Reason sent successfully",
//           showConfirmButton: false,
//           timer: 1500,
//           width: "300px"
//         });
//         this.projectForm.reset();
//         this.getAllEmployee();
//       },
//       () => {
//         alert("Error adding employee");
//       }
//     );
//   }

//   reloadUser() {
//     this.api.getEmployee().subscribe(res => {
//       this.submission = res.filter((submission, index) => {
//         const endDate = new Date(this.endDateList[index]);
//         const date = new Date(submission.date);
//         return date > endDate;
//       });
//     });
//   }
  
  
// }

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import Swal from 'sweetalert2';
// import { latesub } from './latesub';
// import { LatesubService } from '../../../service/latesub.service';
// import { SessionhandlingService } from '../../../service/sessionhandling.service';
// import { SubmissionService } from '../../../service/submission.service';
// import { AssigningtaskService } from '../../../service/assigningtask.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-latesubmission',
//   templateUrl: './latesubmission.component.html',
//   styleUrls: ['./latesubmission.component.scss']
// })
// export class LatesubmissionComponent implements OnInit {

//   projectForm!: FormGroup;
//   modelobj: latesub = new latesub();
//   latesub!: any[];
//   submission!: any[];
//   submissions!: any[];
//   employeeEndDate: string = '';
//   loggedInUsername!: string;
//   endDateList: string[] = []; 
//   DateList: string[] = [];

//   constructor(
//     private fb: FormBuilder,
//     private api: LatesubService,
//     private userService: SessionhandlingService,
//     private service: SubmissionService,
//     private ser: AssigningtaskService,
//     private http: HttpClient
//   ) { }

//   ngOnInit(): void {
//     this.loggedInUsername = this.userService.getLoggedInUsername() || '';

//     // Initialize form
//     this.projectForm = this.fb.group({
//       title: ['', [Validators.required]],
//       assignee: ['', [Validators.required]],
//       description: ['', [Validators.required]],
//       priority: ['', Validators.required],
//       date: ['', [Validators.required]]
//     });
//      // Load data
//     // this.reloadUser();
//     this.loadData()
//     this.getAllEmployee();
//     this.service.getEmployee().subscribe(res => {
//       this.submission = res;
//     });
//   }

//   loadData() {
//     this.getAllEmployee();
//     this.service.getEmployee().subscribe(serviceRes => {
//       // Take only the last value for DateList
//       this.DateList = [serviceRes[serviceRes.length - 1].date];
//       this.ser.getEmployee().subscribe(serRes => {
//         // Take only the last value for endDateList
//         this.endDateList = [serRes[serRes.length - 1].employeeEndDate];
//         this.runComparisonLoop(); // Run the comparison loop after both lists are populated
//       });
//     });
//   }
  
//   runComparisonLoop() {
//     // Check if both endDateList and DateList are populated
//     if (this.endDateList.length > 0 && this.DateList.length > 0) {
//       // Take the last value of each list
//       const endDate = new Date(this.endDateList[0]);
//       const date = new Date(this.DateList[0]);
  
//       console.log('Date:', date);
//       console.log('End Date:', endDate);
  
//       if (date > endDate) {
//         // Find the late submission
//         const lateSubmission = this.submission[this.submission.length - 1];
  
//         // Log the late submission details
//         console.log('Employee Details:', lateSubmission);
  
//         // Add the late submission to the submissions array
//         this.submission.push(lateSubmission);
//       }
//     }
//   }
  
  
  

//   onSubmit() {
//     if (this.projectForm.valid) {
//       this.postEmployeeDetails();
//     }
//   }

//   show() {
//     this.projectForm.reset();
//   }

//   onEdit(lateSubmission: any): void {
//     this.projectForm.patchValue({
//       title: lateSubmission.title,
//       assignee: lateSubmission.assignee,
//       date: lateSubmission.date
//     });
//   }

//   getAllEmployee(): void {
//     this.api.getEmployee().subscribe(
//       (res) => {
//         this.submission = res;
//       },
//       () => {
//         alert("Error fetching employee data");
//       }
//     );
//   }

//   postEmployeeDetails(): void {
//     this.modelobj = this.projectForm.value;
//     this.api.postEmployee(this.modelobj).subscribe(
//       () => {
//         Swal.fire({
//           icon: "success",
//           title: "<span style='font-size: 19px'> Reason sent successfully",
//           showConfirmButton: false,
//           timer: 1500,
//           width: "300px"
//         });
//         this.projectForm.reset();
//         this.loadData(); // Reload data after submission
//       },
//       () => {
//         alert("Error adding employee");
//       }
//     );
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import Swal from 'sweetalert2';
// import { latesub } from './latesub';
// import { LatesubService } from '../../../service/latesub.service';
// import { SessionhandlingService } from '../../../service/sessionhandling.service';
// import { SubmissionService } from '../../../service/submission.service';
// import { AssigningtaskService } from '../../../service/assigningtask.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-latesubmission',
//   templateUrl: './latesubmission.component.html',
//   styleUrls: ['./latesubmission.component.scss']
// })
// export class LatesubmissionComponent implements OnInit {

//   projectForm!: FormGroup;
//   modelobj: latesub = new latesub();
//   submission!: any[]; // Change latesub to any[]
//   submissions: any[] = []; // Initialize submissions array
//   loggedInUsername!: string;
//   endDateList: string[] = []; 
//   DateList: string[] = [];
//   lateSubmission!: any[];
//   constructor(
//     private fb: FormBuilder,
//     private api: LatesubService,
//     private userService: SessionhandlingService,
//     private service: SubmissionService,
//     private ser: AssigningtaskService,
//     private http: HttpClient
//   ) { }

//   ngOnInit(): void {
//     this.loggedInUsername = this.userService.getLoggedInUsername() || '';

//     // Initialize form
//     this.projectForm = this.fb.group({
//       title: ['', [Validators.required]],
//       assignee: ['', [Validators.required]],
//       description: ['', [Validators.required]],
//       priority: ['', Validators.required],
//       date: ['', [Validators.required]]
//     });
    
//     // Load data
//     this.loadData();
    
   
//   }

//   loadData() {
//     this.ser.getEmployee().subscribe(serRes => {
//       // Take only the last value for endDateList
//       this.endDateList = [serRes[serRes.length - 1].employeeEndDate];
//       this.service.getEmployee().subscribe(serviceRes => {
//         // Take only the last value for DateList
//         this.DateList = [serviceRes[serviceRes.length - 1].date];
//         this.runComparisonLoop(); // Run the comparison loop after both lists are populated
//       });
//     });
//   }
  
//   runComparisonLoop() {
//     // Check if both endDateList and DateList are populated and the date is greater than the end date
//     if (this.endDateList.length > 0 && this.DateList.length > 0) {
//       const endDate = new Date(this.endDateList[0]);
//       const date = new Date(this.DateList[0]);
  
//       console.log('Date:', date);
//       console.log('End Date:', endDate);
  
//       // Check if the date is greater than the end date
//       if (date > endDate) {
//         // Fetch employee data only if the date is greater than the end date
//         this.service.getEmployee().subscribe(res => {
//           // Assign the fetched employee data to the submission array
//           this.submission = res;
  
//           // Find the late submission
//           const lateSubmission = this.submission[this.submission.length - 1];
  
//           // Log the late submission details
//           console.log('Employee Details:', lateSubmission);
  
//           // Push the late submission to the submissions array
//           this.submissions.push(lateSubmission);
//         },
//         () => {
//           alert("Error fetching employee data");
//         });
//       } else {
//         // If the date is not greater than the end date, it's not a late submission
//         console.log('Submission is not late.');
//       }
//     }
//   }
  
  
  
  
  
//   onSubmit() {
//     if (this.projectForm.valid) {
//       this.postEmployeeDetails();
//     }
//   }

//   show() {
//     this.projectForm.reset();
//   }

//   onEdit(lateSubmission: any): void {
//     this.projectForm.patchValue({
//       title: lateSubmission.title,
//       assignee: lateSubmission.assignee,
//       date: lateSubmission.date
//     });
//   }

//   // getAllEmployee(): void {
//   //   this.service.getEmployee().subscribe(
//   //     (res) => {
//   //       // Assign the fetched employee data to the submission array
//   //       this.submission = res;
  
//   //       // After fetching the data, run the comparison loop
//   //       this.runComparisonLoop();
//   //     },
//   //     () => {
//   //       alert("Error fetching employee data");
//   //     }
//   //   );
//   // }
  
 
  
//   postEmployeeDetails(): void {
//     this.modelobj = this.projectForm.value;
//     this.api.postEmployee(this.modelobj).subscribe(
//       () => {
//         Swal.fire({
//           icon: "success",
//           title: "<span style='font-size: 19px'> Reason sent successfully",
//           showConfirmButton: false,
//           timer: 1500,
//           width: "300px"
//         });
//         this.projectForm.reset();
//         this.loadData(); // Reload data after submission
//       },
//       () => {
//         alert("Error adding employee");
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { latesub } from './latesub';
import { LatesubService } from '../../../service/latesub.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';
import { SubmissionService } from '../../../service/submission.service';
import { AssigningtaskService } from '../../../service/assigningtask.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-latesubmission',
  templateUrl: './latesubmission.component.html',
  styleUrls: ['./latesubmission.component.scss']
})
export class LatesubmissionComponent implements OnInit {

  projectForm!: FormGroup;
  modelobj: latesub = new latesub();
  loggedInUsername!: string;
  endDateList: string[] = [];
  DateList: string[] = [];
  submissions: any[] = []; 

  constructor(
    private fb: FormBuilder,
    private api: LatesubService,
    private userService: SessionhandlingService,
    private service: SubmissionService,
    private ser: AssigningtaskService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';

   
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      assignee: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', Validators.required],
      date: ['', [Validators.required]]
    });
    this.getAllEmployee();
   
    this.loadData();
  }

  loadData() {
    this.ser.getEmployee().subscribe(serRes => {
      // Take only the last value for endDateList
      this.endDateList = [serRes[serRes.length - 1].employeeEndDate];
      this.service.getEmployee().subscribe(serviceRes => {
        // Take only the last value for DateList
        this.DateList = [serviceRes[serviceRes.length - 1].date];
        this.runComparisonLoop(); // Pass serviceRes to runComparisonLoop
      });
    });
  }

  getAllEmployee(): void {
    this.service.getEmployee().subscribe(
      (res) => {
        // Assign the fetched employee data to the submission array
        this.submissions = res;
    
        // After fetching the data, run the comparison loop
        this.runComparisonLoop();
      },
      () => {
        alert("Error fetching employee data");
      }
    );
  }
  
  runComparisonLoop() {
    // Check if both endDateList and DateList are populated and the date is greater than the end date
    if (this.endDateList.length > 0 && this.DateList.length > 0) {
      const endDate = new Date(this.endDateList[0]);
      const date = new Date(this.DateList[0]);
    
      console.log('Date:', date);
      console.log('End Date:', endDate);
    
      // Filter late submissions based on the condition directly
      this.submissions = this.submissions.filter(item => new Date(item.date) > endDate);
    } else {
      console.log('endDateList or DateList is empty. Skipping filtering of employee data.');
    }
  }
  

  onSubmit() {
    if (this.projectForm.valid) {
      this.postEmployeeDetails();
    }
  }

  show() {
    this.projectForm.reset();
  }

  onEdit(lateSubmission: any): void {
    this.projectForm.patchValue({
      title: lateSubmission.title,
      assignee: lateSubmission.assignee,
      date: lateSubmission.date
    });
  }

  postEmployeeDetails(): void {
    this.modelobj = this.projectForm.value;
    this.api.postEmployee(this.modelobj).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: "<span style='font-size: 19px'> Reason sent successfully",
          showConfirmButton: false,
          timer: 1500,
          width: '300px'
        });
        this.projectForm.reset();
        this.loadData();
      },
      () => {
        alert('Error adding employee');
      }
    );
  }

  
}
