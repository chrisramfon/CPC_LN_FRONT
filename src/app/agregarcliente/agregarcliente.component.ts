import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.css']
})
export class AgregarclienteComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  volveraListadeCliente(){
    this.route.navigate(['admin/listacliente'])
}
}