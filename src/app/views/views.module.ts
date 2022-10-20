import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HomeViewComponent } from './home-view/home-view.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeViewComponent,
    TaskViewComponent,
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ViewsModule { }
