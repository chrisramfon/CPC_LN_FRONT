import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'app/services/cliente.service';


@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
export class EditarclienteComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private route:Router, private ClienteServicio: ClienteService) {}
  SendCliente = { 
    _id:"", nombre:"", rfc:"", telefono:"", correo:"", direccion:"", estado:"", __v:"",
 }

  Clientee
  ngOnInit(): void {
  this.getCliente()   
  }
  volveraListadeCliente(){
    this.route.navigate(['admin/listacliente'])
  }
  getCliente(){
    this.SendCliente._id = this._route.snapshot.paramMap.get('id')
    this.ClienteServicio.getverCliente(this.SendCliente).subscribe(
      res=>{
    this.SendCliente = res;
    console.log(this.SendCliente)
    }, 
    err => {console.log(err)
    alert("Cliente no encontrado")
    })
  }
  putCliente(){
    this.ClienteServicio.EditarCliente(this.SendCliente).subscribe(
      res=>{
        alert("Cliente editado con éxito.")
        console.log(res)
      },
      err => {
        console.log(err)
        alert("El cliente no se pudo modificar")
      }
    )
  }
  GuardarputCliente(){
    this.ClienteServicio.EditarCliente(this.SendCliente).subscribe(
      res=>{
        alert("Cliente modificado con éxito")
      },
      err =>{
        console.log(err)
      alert("El cliente no pudo ser modificado")      }
    )
  }

  }

