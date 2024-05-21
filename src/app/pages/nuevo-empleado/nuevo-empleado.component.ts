import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent {

  formulario: FormGroup;

  formBuilder = inject(FormBuilder);
  empleadosService = inject(EmpleadosService);
  router = inject(Router);

  constructor() {
    this.formulario = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      departamento: '',
      salario: ''
    });
  }

  onSubmit() {
    this.empleadosService.create(this.formulario.value).subscribe(() => {
      alert('Empleado creado correctamente');
      this.router.navigate(['/']);
    });
  }

}
