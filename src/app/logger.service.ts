import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // El servicio será creado en el inyector raíz de la app
})
export class LoggerService {
  // agregamos algunos métodos
  log(msg: any) { 
    console.log(msg); 
  }
  error(msg: any) { 
    console.error(msg); 
  }
  warn(msg: any) { 
    console.warn(msg); 
  }

  constructor() { }
}
