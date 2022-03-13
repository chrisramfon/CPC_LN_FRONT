import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit {

  ESend = { _id: "", nombre: "", apellidoP: "", apellidoM: "", telefono: "", correo: "", pass: "", estado: "", __v: ""}
  ERes

  constructor(private Aroute: ActivatedRoute, private Empleado: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleado()
  }

  getEmpleado() {
    this.ESend._id = this.Aroute.snapshot.paramMap.get('id')
    this.Empleado.getEmpleado(this.ESend).subscribe(
      res=>{
        this.ESend = res;
        console.log(this.ESend)
      },
       err=>{
         console.log(err)
         alert("Empleado no encontrado")
       })
  }  

  putEmpleado() {

    this.Empleado.putEmpleado(this.ESend).subscribe(
      res => {
        alert("Empleado modificado con éxito.")
        console.log(res)
      },
      err => {
        console.log(err)
        alert("El empleado no se pudo modificar.")
      })

  }

}

