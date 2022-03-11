import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
export class EditarclienteComponent implements OnInit {
id = '';
name = '';
  constructor(private _route: ActivatedRoute, private route:Router) {
    
   }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.name = this._route.snapshot.paramMap.get('name');
   
  }
  volveraListadeCliente(){
    this.route.navigate(['admin/listacliente'])
  }

}
