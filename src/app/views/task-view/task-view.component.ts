import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  taskId !: number;
  currentTask !: Task | undefined;

  constructor(private route : ActivatedRoute, private taskData : DataService) { }


  ngOnInit(): void {
    //Con el nombre exacto del parámetro que pusimos en el app-routing-module:
    this.taskId = Number(this.route.snapshot.paramMap.get('taskId'));
    if(this.taskId === NaN){
      console.log("No existe el id");
      //Redireccionar a Home o 404
    }
    this.currentTask = this.taskData.getTasks().find(t => t.id === this.taskId);
  }

}
