import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'app/services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  constructor(private Empleado: EmpleadoService, private router:Router ) { }

  ESend = { nombre: "", apellidoP: "", apellidoM: "", telefono: "", correo: "", pass: "", estado: "activo" }

  ngOnInit(): void {
  }
  volverListaEmpleados(){
    this.router.navigate(['admin/ListaEmpleado'])

  }
  postEmpleado() {

    if (this.ESend.nombre == "" || this.ESend.apellidoP == "" || this.ESend.correo == "" || this.ESend.pass == "") {
      alert("Falta dato requerido."); throw "Falta dato requerido."
    }
    this.Empleado.postEmpleado(this.ESend).subscribe(
      res => {
        alert("Empleado registrado.")
        console.log(res)
      },
      err => {
        alert("Error al registrar el empleado.")
        console.log(err)
      })

  }

  limpiarEmpleado() {
    this.ESend = { nombre: "", apellidoP: "", apellidoM: "", telefono: "", correo: "", pass: "", estado: "activo" }
  }

}


/*

this.Empleado.postEmpleado(this.ESend).subscribe(
      res=>{
        alert("Empleado registrado con éxito.")
        console.log(res)
        this.limpiarEmpleado()
      }, 
      err=>{
        alert("El empleado no se pudo registrar. Favor de validar los datos.")
        console.log(err)
      })

*/