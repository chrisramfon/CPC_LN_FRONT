import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  private empleadosURL = "http://127.0.0.1:3000/trabajador/"
  private empleadoURL = "http://127.0.0.1:3000/trabajador/buscar"
  private modificarURL = "http://127.0.0.1:3000/trabajador/Modificar"
  private registrarURL = "http://127.0.0.1:3000/trabajador"

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get<any>(this.empleadosURL)
  }

  getEmpleado(EmpId){
    return this.http.post<any>(this.empleadoURL, EmpId)
  }

  putEmpleado(Emp){
    return this.http.put<any>(this.modificarURL, Emp)
  }

  postEmpleado(Emp){
    return this.http.post<any>(this.registrarURL, Emp)
  }
}


