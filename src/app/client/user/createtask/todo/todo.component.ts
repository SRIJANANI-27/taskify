import { Component } from '@angular/core';
import { Task } from './task';
import { TodoService } from '../../../../service/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  taskObj: Task = new Task();
  tasks: Task[] = [];
  addTaskValue: string = '';
  editTaskValue: string = '';

  constructor(private crudService: TodoService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.crudService.getUser().subscribe(
      (res) => {
        this.tasks = res;
      },
      (error) => {
        console.error("Error fetching tasks", error);
      }
    );
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.postUser(this.taskObj).subscribe(
      () => {
        this.addTaskValue = '';
        this.getAllTasks();
      },
      (error) => {
        console.error("Error adding task", error);
      }
    );
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.updateUser(this.taskObj).subscribe(
      () => {
        this.editTaskValue = '';
        this.getAllTasks();
      },
      (error) => {
        console.error("Error updating task", error);
      }
    );
  }

  onDelete(taskId: number) {
    this.crudService.deleteUser(taskId).subscribe(
      () => {
        this.getAllTasks();
      },
      (error) => {
        console.error("Error deleting task", error);
      }
    );
  }

  call(task: Task) {
    this.taskObj = { ...task };
    this.editTaskValue = task.task_name;
  }

}