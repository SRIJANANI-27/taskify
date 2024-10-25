import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../client/user/createtask/todo/task';
// import { usermodel } from '../user/usermodel';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

//   serviceURL : string ;

//   constructor(private http : HttpClient) {
//     this.serviceURL = "http://localhost:3000/tasks"
//   }

//   addTask(task : any) : Observable<any> {
//     return this.http.post<any>(this.serviceURL,task);
//   }

//   getAllTask() : Observable<any[]> {
//     return this.http.get<any[]>(this.serviceURL);
//   }

//   deleteTask(task : any) : Observable<any> {
//     return this.http.delete<any>("http://localhost:3000/tasks/"+task.id);
//   }
 
//   editTask(task : any) : Observable<any> {
//     return this.http.put<any>(this.serviceURL+'/'+task.id,task);
//   }
// }
//   constructor(private http:HttpClient) { }
//   addTask(task : any) : Observable<any> {
//       return this.http.post<any>("http://localhost:3000/tasks",task);
//     }

//      getAllTask() : Observable<any> {
//         return this.http.get<any>("http://localhost:3000/tasks");
//       }
//     editTask(task:any,id:number) : Observable<any> {
//     return this.http.put<any>("http://localhost:3000/tasks/" + id, task);
//   }

//   deleteTask(id: number) : Observable<any> {
//     return this.http.delete<any>("http://localhost:3000/tasks/"+ id);
//   }
// }

constructor(private http: HttpClient) {}

// Fetch all tasks
getUser(): Observable<Task[]> {
  return this.http.get<Task[]>("http://localhost:3000/tasks");
}

// Add a new task
postUser(task: Task): Observable<Task> {
  return this.http.post<Task>("http://localhost:3000/tasks", task);
}

// Update an existing task
updateUser(task: Task): Observable<Task> {
  const url = `http://localhost:3000/tasks/${task.id}`;
  return this.http.put<Task>(url, task);
}

// Delete a task
deleteUser(id: number): Observable<void> {
  const url = `http://localhost:3000/tasks/${id}`;
  return this.http.delete<void>(url);
}
}