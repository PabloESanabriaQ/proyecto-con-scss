import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FeaturesModule } from '../features/features.module';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class CoreModule { }
