import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskInputComponent } from './new-task-input/new-task-input.component';
import { DataService } from './data.service';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { ViewsModule } from './views/views.module';


@NgModule({
  declarations: [
    AppComponent,
    NewTaskInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    ViewsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
