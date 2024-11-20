import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMatriculasPlanosComponent } from './components/dashboard-matriculas-planos/dashboard-matriculas-planos.component';
import { TabelaAlunosComponent } from './components/tabela-alunos/tabela-alunos.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormularioContentComponent } from './pages/formulario/formulario-content/formulario-content.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


import { RippleModule } from 'primeng/ripple';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';

import { InputTextareaModule } from 'primeng/inputtextarea';

import { FileUploadModule } from 'primeng/fileupload';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';

import { InputNumberModule } from 'primeng/inputnumber';
import { AlunoModalComponent } from './components/modals/aluno-modal/aluno-modal.component';
import { PlanoModalComponent } from './components/modals/plano-modal/plano-modal.component';
import { ModalComponent } from './components/modals/modal/modal.component';

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
    TabelaAlunosComponent,
    AlunoModalComponent,
    PlanoModalComponent,
    ModalComponent,    // Declare o modal de Aluno

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    ProgressBarModule,
    TableModule,
    DialogModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
    CommonModule,
    FileUploadModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    RatingModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,

  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
