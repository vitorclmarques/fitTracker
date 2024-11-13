import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Aluno } from '../../interface/aluno';
import { MockService } from '../../mock/mock-aluno-service';
import { Plano } from '../../interface/plano';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.scss'],
})
export class TabelaAlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  planos: Plano[] = []
  statuses: SelectItem[] = [];
  clonedAlunos: { [s: string]: Aluno } = {};
  data: any;
  options: any;

  constructor(private mockService: MockService) {}

  ngOnInit() {
    this.mockService.getAlunos().then((data) => {
      this.alunos = data;
      console.log(this.alunos)
    });
    this.mockService.getPlanos().then((data) => {
      this.planos = data;

    });
  }

  onRowEditInit(aluno: Aluno) {
    this.clonedAlunos[aluno.id] = { ...aluno };
  }

  onRowEditSave(aluno: Aluno) {
    delete this.clonedAlunos[aluno.id];
  }

  onRowEditCancel(aluno: Aluno, index: number) {
    this.alunos[index] = this.clonedAlunos[aluno.id];
    delete this.clonedAlunos[aluno.id];
  }

  onEdit(aluno: Aluno) {
    // Lógica para iniciar o modo de edição
    this.onRowEditInit(aluno);
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

}
