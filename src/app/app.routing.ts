import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';

const routes: Routes =[
  {path: 'inicio', component: IniciosesionComponent}, 
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
