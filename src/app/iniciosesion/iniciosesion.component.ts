import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  Usuario = {correo: "", pass: ""}

  constructor(private router:Router, private Log: LoginService) { }

  login(){
    this.Log.reqLogin(this.Usuario).subscribe(
      res=>{
        const result = res
        console.log(result)
        this.router.navigateByUrl('/admin')
      }, 
      err=>{
        console.log(err)
        alert("Usuario o contraseña incorrectos")
      })
  }
}
