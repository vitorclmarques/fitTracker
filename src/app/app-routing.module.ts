import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homedir } from 'node:os';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import path from 'node:path';
import { DashboardMatriculasPlanosComponent } from './components/dashboard-matriculas-planos/dashboard-matriculas-planos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'cadastro',
    component:FormularioComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {path:'matriculas-planos', component:DashboardMatriculasPlanosComponent}
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
