import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { TableListComponent } from './table-list/table-list.component';
import { AgregarclienteComponent } from './agregarcliente/agregarcliente.component';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';
import { ListacuentabancariaComponent } from './listacuentabancaria/listacuentabancaria.component';
import { VercuentabancariaComponent } from './vercuentabancaria/vercuentabancaria.component';
import { EditarcuentabancariaComponent } from './editarcuentabancaria/editarcuentabancaria.component';



const routes: Routes = [
  {path: 'inicio', component: IniciosesionComponent}, 
  {path: 'admin', component: AdminLayoutComponent,
  children: 
    [
      { path:'', pathMatch:'prefix', redirectTo:'agregarcliente'},
      {path:'agregarcliente', component: AgregarclienteComponent},

      {path:'', pathMatch:'prefix', redirectTo:'listacliente'},
      {path:'listacliente', component: ListaclienteComponent},

      {path:'', pathMatch:'prefix', redirectTo:'editarcliente'},
      {path:'editarcliente', component: EditarclienteComponent},

      {path:'', pathMatch:'prefix', redirectTo:'listacuentasbancarias'},
      {path:'listacuentasbancarias', component: ListacuentabancariaComponent},

      {path:'', pathMatch:'prefix', redirectTo:'editarcuentabancaria'},
      {path:'editarcuentabancaria/:id', component: EditarcuentabancariaComponent},

      {path:'', pathMatch:'prefix', redirectTo:'vercuentabancaria'},
      {path:'vercuentabancaria/:id', component: VercuentabancariaComponent},

    ]
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'} 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})

export class AppRoutingModule { }
