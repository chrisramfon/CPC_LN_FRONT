import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'app/services/cliente.service';

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.css']
})
export class AgregarclienteComponent implements OnInit {

  constructor(private route: Router, private ClS: ClienteService) { }

  Cliente = { nombre: "", rfc: "", telefono: "", correo: "", direccion: "", estado: "Activo" }

  ngOnInit(): void {
  }

  volveraListadeCliente() {
    this.route.navigate(['admin/listacliente'])
  }

  postCliente() {
    this.ClS.postCliente(this.Cliente).subscribe(
      res => {
        alert("Cliente registrado.")
        console.log(res)
        this.limpiarFormulario()

      },
      err => {
        alert("El cliente no se pudo registrar. Favor de verificar los datos.")
        console.log(err)
      })
  }

  limpiarFormulario() {
    this.Cliente = { nombre: "", rfc: "", telefono: "", correo: "", direccion: "", estado: "Activo" }
  }

}