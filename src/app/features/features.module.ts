import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TaskFormComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    TaskFormComponent,
    TaskItemComponent
  ],
  providers: [
    DataService
  ]
})
export class FeaturesModule { }
