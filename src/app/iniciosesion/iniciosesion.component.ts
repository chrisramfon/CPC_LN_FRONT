import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  Usuario = {correo: "", pass: ""}

  constructor(private router:Router, private Log: LoginService) { }

  ngOnInit(): void {
   
  }

  login(){
    this.Log.reqLogin(this.Usuario).subscribe(
      res=>{
        const result = res
        console.log(result);
      }, 
      err=>{
        console.log(err)
        alert("Error al inicial sesion")
      })
  }
  navegaraDashboard(){
    this.router.navigate(['/admin'])
  }
}
