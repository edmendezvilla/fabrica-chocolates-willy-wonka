import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  @Input() ordenDelJefe: string;
  @Output() respuestaDelEmpleado = new EventEmitter<string>();

  responderAlJefe() {
    this.respuestaDelEmpleado.emit('Orden completada: ' + this.ordenDelJefe);
  }
}

