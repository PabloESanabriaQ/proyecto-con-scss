import { Component } from '@angular/core';
import { LoggerService } from './logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'proyecto-con-scss';
  


  constructor(public logger : LoggerService){
    this.logger.log("Constructor del AppComponent");
    this.logger.error("Esto es un error");
    this.logger.warn("Esto es una advertencia");

  }
  
  ngOnInit(): void {
  }

}
