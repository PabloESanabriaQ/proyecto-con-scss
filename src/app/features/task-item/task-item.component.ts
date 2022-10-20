import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from 'src/app/task.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: TaskModel;
  @Output() deleteTaskEvent = new EventEmitter<number>();

  constructor(public taskData : DataService) { 
    //this.task =  taskData.getTasks();
  }

  ngOnInit(): void {
  }

  deleteTask(taskId: number){
    this.deleteTaskEvent.emit(taskId);
  }

  checkTask(task : TaskModel){
    this.taskData.check(task);
  }
}
