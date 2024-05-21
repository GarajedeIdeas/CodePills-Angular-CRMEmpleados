import { Routes } from '@angular/router';
import { EmpleadosListComponent } from './pages/empleados-list/empleados-list.component';
import { NuevoEmpleadoComponent } from './pages/nuevo-empleado/nuevo-empleado.component';

export const routes: Routes = [
    { path: '', component: EmpleadosListComponent },
    { path: 'nuevo-empleado', component: NuevoEmpleadoComponent }
];
