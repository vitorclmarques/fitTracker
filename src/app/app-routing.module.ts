import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMatriculasPlanosComponent } from './components/dashboard-matriculas-planos/dashboard-matriculas-planos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TabelaAlunosComponent } from './components/tabela-alunos/tabela-alunos.component';

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
      {path:'matriculas-planos', component:DashboardMatriculasPlanosComponent},
      {path:'tabela-alunos',  component:TabelaAlunosComponent}
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
