import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes =[
  {
    path: '', redirectTo: '/iniciosesion', pathMatch: 'full',
  }, 
  { path: 'dashboard', component: DashboardComponent,
    children: 
  [
    { path: 'user-profile', component: UserProfileComponent}
  ]
  }];
// VÍDEO PARA GUIARSE CON LAS CHILD ROUTES: https://m.youtube.com/watch?v=ZoeZxpfTCXk



/*const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];*/


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
