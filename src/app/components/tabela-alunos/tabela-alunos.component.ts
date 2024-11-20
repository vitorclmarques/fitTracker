import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Aluno } from '../../interface/aluno';
import { MockService } from '../../mock/mock-aluno-service';
import { Plano } from '../../interface/plano';
import { ModalField } from '../../interface/modal';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.scss'],
})
export class TabelaAlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  planos: Plano[] = [];
  statuses: SelectItem[] = [];
  clonedAlunos: { [s: string]: Aluno } = {};
  data: any;
  options: any;

  visibleAluno: boolean = false;
  visiblePlano: boolean = false;

  visibleAlunoCadastro: boolean = false;


  alunoSelecionado: Aluno | null = null;
  planoSelecionado: Plano | null = null;

  constructor(private mockService: MockService) {}

  ngOnInit() {
    this.mockService.getAlunos().then((data) => {
      this.alunos = data;
    });
    this.mockService.getPlanos().then((data) => {
      this.planos = data;
    });
  }

  openAlunoModal() {
    this.visibleAlunoCadastro = true;
  }
  closeModal() {
    this.visibleAlunoCadastro = false;
  }

  saveAluno(aluno: Aluno) {
    aluno.id = String(this.alunos.length + 1); // Gera um ID fictício para o novo aluno
    this.alunos.push(aluno); // Adiciona o aluno à lista
    this.visibleAlunoCadastro = false; // Fecha o modal após salvar
  }

  showAlunoDialog(aluno: Aluno) {
    this.alunoSelecionado = { ...aluno }; // Clona o aluno para edição
    this.visibleAluno = true;
  }

  onSaveAluno(aluno: Aluno) {
    this.alunos.push({ ...aluno, id: Date.now().toString() });
    this.visibleAluno = false;
  }

  showPlanoDialog(plano: Plano) {
    this.planoSelecionado = { ...plano }; // Clona o plano para edição
    this.visiblePlano = true;
  }

  onSavePlano(plano: Plano) {
    const index = this.planos.findIndex((p) => p.nome === plano.nome);
    if (index !== -1) this.planos[index] = plano; // Atualiza os dados
    this.visiblePlano = false;
  }

  onDelete(aluno: Aluno) {
    // Lógica para excluir o aluno da lista
    this.alunos = this.alunos.filter((a) => a.id !== aluno.id);
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Ativo':
        return 'success';
      case 'Expirando':
        return 'warning';
      case 'Vencido':
        return 'danger';
      default:
        return 'info';
    }
  }

  showDialog() {
    this.visiblePlano = true;
  }
}
