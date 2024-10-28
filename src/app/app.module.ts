import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormularioContentComponent } from './pages/formulario/formulario-content/formulario-content.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardMatriculasPlanosComponent } from './components/dashboard-matriculas-planos/dashboard-matriculas-planos.component';
import { ChartModule } from 'primeng/chart';
import { DashboardAlunosComponent } from './components/dashboard-alunos/dashboard-alunos.component';
import { ProgressBarModule } from 'primeng/progressbar';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FormularioComponent,
    FormularioContentComponent,
    LoginComponent,
    DashboardComponent,
    DashboardMatriculasPlanosComponent,
    DashboardAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    ProgressBarModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
