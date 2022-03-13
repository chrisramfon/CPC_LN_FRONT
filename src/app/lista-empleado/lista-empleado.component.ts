import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  constructor(private Emp: EmpleadoService) { }

  List

  ngOnInit(): void {
    this.getEmpleado()
  }

  getEmpleado() {

    this.Emp.getEmpleados().subscribe(
      res => {
        this.List = res
        console.log(this.List)
      },
      err => {
        console.log(err)
       })
    
  }
}
