import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { TaskViewComponent } from './views/task-view/task-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent, pathMatch:"full" },
  { path: 'tasks/:taskId', component: TaskViewComponent, pathMatch:"full" },
  { path: 'login', component: LoginViewComponent, pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
