import { Component } from '@angular/core';

@Component({
  selector: 'app-jefe',
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css']
})
export class JefeComponent {
  ordenDelJefe: string = 'Producir 100 barras de chocolate';
  respuestas: string[] = [];

  recibirRespuesta(respuesta: string) {
    this.respuestas.push(respuesta);
  }
}
