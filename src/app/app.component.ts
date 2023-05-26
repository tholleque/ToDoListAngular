import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListApp';
  ToDoList : ToDo[] = [
    {task: "Finish Lab", completed: false},
    {task: "Do the Dishes", completed: false},
    {task: "Drink Water", completed: true}
  ];

  showForm: boolean = true;
  newToDo : ToDo = {task: "", completed: false};
  toggleForm(): void {
    this.showForm = !this.showForm;
  }
 
  completeTask(i:number): void {
    this.ToDoList[i].completed = true;  
  }
  addToDo(): void {
    this.ToDoList.push(this.newToDo);
    this.newToDo = {task:"", completed: false};
    this.showForm =false;
  }

  removeTask(i:number): void {
    this.ToDoList.splice(i,1);
  }
}



