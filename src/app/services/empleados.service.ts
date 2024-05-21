import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados';

  httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<Empleado[]>(this.baseUrl);
  }

  create(empleado: any) {
    return this.httpClient.post(this.baseUrl, empleado);
  }

}
