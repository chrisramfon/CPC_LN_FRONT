import { Component, OnInit } from '@angular/core';
import {ClienteService} from 'app/services/cliente.service';
@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent implements OnInit {

  constructor(private ListaCliente: ClienteService) { }

  List

  ngOnInit(): void {
    this.getListaCliente()
  }
  getListaCliente(){
    this.List = this.ListaCliente.ListaCliente().subscribe(
      res=>{
        this.List = res;
      
      }, 
      err =>{
        alert("error al tener lista")

      })
  }

}
