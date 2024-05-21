import { Component, inject } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados-list',
  standalone: true,
  imports: [],
  templateUrl: './empleados-list.component.html',
  styleUrl: './empleados-list.component.css'
})
export class EmpleadosListComponent {

  arrEmpleados: Empleado[] = [];

  empleadosService = inject(EmpleadosService);

  ngOnInit() {
    this.empleadosService.getAll().subscribe((data: Empleado[]) => {
      this.arrEmpleados = data;
    });
  }

}
