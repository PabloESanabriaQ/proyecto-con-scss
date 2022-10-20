import { Injectable } from '@angular/core';
import { TaskModel } from './task.model';
import { Task } from './task';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tasks: Task[] = [
    //this.task
    new TaskModel(0, 'hacer ensalada', true),
    new TaskModel(1, 'aprender react', false),
    new TaskModel(2, 'aprender angular', false)
  ];

  private tasks$ = new Subject<Task[]>();

  getTasks(){
    return this.tasks;
  }

  addTask(task:string){

    this.tasks.unshift(new TaskModel(this.getNewId(), task, false));
    //this.tasks.push({id: this.getNewId(), description: task, completed: false});
    console.log(this.tasks);
    this.tasks$.next(this.tasks);
  }

  getNewId(): number {
    //Si nos quedamos sin tareas devuelve -Infinity
    return this.tasks.length == 0 ? 0 : 1 + Math.max(...this.tasks.map(o => o.id));
  }

  removeTask(taskId: number){
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  check(task: TaskModel){
    task?.completed ? task.completed = false : task.completed = true;
  }

  getTasks$(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  constructor() { }
}
