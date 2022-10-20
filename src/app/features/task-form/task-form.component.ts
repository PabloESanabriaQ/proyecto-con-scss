import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NewTaskInputComponent } from 'src/app/new-task-input/new-task-input.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  buttonValue = "ADD";
  constructor(public taskData : DataService) { }

  ngOnInit(): void {
  }

  addTask(task:string, e: Event){
    //No es mala práctica prevenir el default de un evento:
    e.preventDefault();
    this.taskData.addTask(task);
  }

}
