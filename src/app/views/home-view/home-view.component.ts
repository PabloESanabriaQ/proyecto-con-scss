import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { Task } from '../../task';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  tasks: Task[] = [];
  tasks$: Observable<Task[]> = new Observable<Task[]>();

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
    this.tasks = this.taskData.getTasks();
  }

  ngOnInit(): void {
    this.tasks$ = this.taskData.getTasks$(); // recuperamos la lista
    this.tasks$.subscribe(tasks => this.tasks = tasks); // nos suscribimos a los cambios
		// cargamos algunas tareas
    this.addTask('Aprender Angular');
    this.addTask('Aprender TypeScript');
    this.addTask('Aprender React');
    this.addTask('Descansar el finde');
    this.addTask('Ir a clase 18.00hs');
  }

}
