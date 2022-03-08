import { Component, OnInit } from '@angular/core';
import { AdeudoService } from 'app/services/adeudo.service';

@Component({
  selector: 'app-lista-adeudo',
  templateUrl: './lista-adeudo.component.html',
  styleUrls: ['./lista-adeudo.component.css']
})
export class ListaAdeudoComponent implements OnInit {

  constructor(private Adeudo: AdeudoService) { }

  List

  ngOnInit(): void {

    this.getAdeudo()

  }

  getAdeudo(){

    console.log("Ejecutado")

     this.List = this.Adeudo.ListaAdeudo().subscribe(res =>{

      this.List = res;
      console.log(this.List.results)

     })

  }

}
