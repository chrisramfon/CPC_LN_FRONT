import { Component, OnInit } from '@angular/core';
import { CuentabancariaService } from 'app/services/cuentabancaria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listacuentabancaria',
  templateUrl: './listacuentabancaria.component.html',
  styleUrls: ['./listacuentabancaria.component.css']
})
export class ListacuentabancariaComponent implements OnInit {

  constructor(private ListaCuentaBancaria: CuentabancariaService, private router:Router) { }
  List

  ngOnInit(): void {
  this.getListaCuentaBancaria()
  }
getListaCuentaBancaria(){
  this.List = this.ListaCuentaBancaria.ListaCuentaBancaria().subscribe(
    res=>{
      this.List = res;
    
    }, 
    err =>{
      alert("error al tener lista")

    })
}
}
