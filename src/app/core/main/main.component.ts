import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  tasks$: Observable<Task[]> = new Observable<Task[]>();

  tasksSubscription: Subscription = new Subscription();

  constructor(public taskData : DataService){

    this.tasks =  taskData.getTasks();
  }

  addTask(task:string){    
    this.taskData.addTask(task);
    
    //Al ser un botón en un form, por defecto recarga la página. 
    console.log(task);
    //this.tasks.push({id: this.getNewId(), description: task, completed: false});
    console.log(this.tasks);
  }

  removeTask(taskId: number){
    this.taskData.removeTask(taskId);
    //No es buena práctica pero resuelve el problema ahora mismo:
    //this.tasks = this.taskData.getTasks();
  }

  ngOnInit(): void {
    this.tasks$ = this.taskData.getTasks$(); // recuperamos la lista
    // nos suscribimos a los cambios
    this.tasksSubscription = this.tasks$.subscribe(tasks => this.tasks = tasks);
  }
  
  ngOnDestroy() {
		//eliminamos la suscripción
    this.tasksSubscription.unsubscribe();
  }

}
