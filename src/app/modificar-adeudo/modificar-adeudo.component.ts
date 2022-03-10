import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdeudoService } from 'app/services/adeudo.service';

@Component({
  selector: 'app-modificar-adeudo',
  templateUrl: './modificar-adeudo.component.html',
  styleUrls: ['./modificar-adeudo.component.css']
})
export class ModificarAdeudoComponent implements OnInit {

  adeudo = {
    RFC: "", adeudo: "", pagado: "", total: "", fecha_factura: "", fecha_limite: "", notas: ""
  }

  List
  Person


  constructor(private Aroute: ActivatedRoute, private Adeudo: AdeudoService) { }

  ngOnInit(): void {
  this.getAdeudo()
  }

 getAdeudo(){
   this.Adeudo.ListaAdeudo().subscribe(
     res=>{
       this.List = res.results
       let id = this.Aroute.snapshot.paramMap.get('id')
      for(let i = 0; i < this.List.length; i++){
        if(id == this.List[i].id){
          this.Person = this.List[i]
          console.log(this.List[i])  
        }
      }
     }, 
     err=>{

     })
 }

}
