import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CoreModule } from '../core/core.module';
import { FeaturesModule } from '../features/features.module';

import { HomeViewComponent } from './home-view/home-view.component';
import { TaskViewComponent } from './task-view/task-view.component';



@NgModule({
  declarations: [
    HomeViewComponent,
    TaskViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FeaturesModule
  ]
})
export class ViewsModule { }
