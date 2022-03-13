import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-ver-empleado',
  templateUrl: './ver-empleado.component.html',
  styleUrls: ['./ver-empleado.component.css']
})
export class VerEmpleadoComponent implements OnInit {

  constructor(private Aroute: ActivatedRoute, private Empleado: EmpleadoService) { }

  ERes = { _id: "", nombre: "", apellidoP: "", apellidoM: "", telefono: "", correo: "", pass: "", estado: "", __v: ""}

  ngOnInit(): void {
    this.getEmpleado()
  }

  getEmpleado() {
    this.ERes._id = this.Aroute.snapshot.paramMap.get('id')
    this.Empleado.getEmpleado(this.ERes).subscribe(res=>{
      this.ERes = res;
    }, err=>{
      console.log(err)
      alert("Empleado no encontrado.")
    })
  }

}
