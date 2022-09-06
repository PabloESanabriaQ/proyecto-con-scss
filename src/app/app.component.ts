import { Component } from '@angular/core';
import { Task } from './task';
import { TaskModel } from './task.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'proyecto-con-scss';

  //task = new TaskModel(0, "Task N", false);
  tasks: Task[] = [
    //this.task
  ];

  addTask(task:string, e: Event){
    //No es mala práctica prevenir el default de un evento:
    e.preventDefault();
    //Al ser un botón en un form, por defecto recarga la página. 
    console.log(task);

    this.tasks.push(new TaskModel(this.getNewId(), task, false));
    //this.tasks.push({id: this.getNewId(), description: task, completed: false});
    console.log(this.tasks);
  }

  getNewId(): number {
    //Si nos quedamos sin tareas devuelve -Infinity
    return this.tasks.length == 0 ? 0 : 1 + Math.max(...this.tasks.map(o => o.id));
  }

  removeTask(taskId: number){
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  check(task: Task){
    task?.completed ? task.completed = false : task.completed = true;
  }
}
