import { Component, OnInit } from '@angular/core';
import {ClienteService} from 'app/services/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent implements OnInit {

  constructor(private ListaCliente: ClienteService, private router:Router) { }

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
  iraRegistrarcliente = function(){
    this.router.navigate(['admin/agregarcliente']);
  }

}
