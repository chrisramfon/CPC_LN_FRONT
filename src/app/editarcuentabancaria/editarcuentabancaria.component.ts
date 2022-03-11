import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarcuentabancaria',
  templateUrl: './editarcuentabancaria.component.html',
  styleUrls: ['./editarcuentabancaria.component.css']
})
export class EditarcuentabancariaComponent implements OnInit {

  constructor(private router:Router, route:ActivatedRoute ) { }

  ngOnInit(): void {
  }
  volveraListadeCuentasBancarias(){
    this.router.navigate(['admin/listacuentasbancarias'])
  }
}
