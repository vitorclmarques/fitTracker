import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from '../../../interface/aluno';

@Component({
  selector: 'app-aluno-modal',
  templateUrl: './aluno-modal.component.html',
  styleUrl: './aluno-modal.component.scss'
})
export class AlunoModalComponent {
  @Input() visible: boolean = false; // Controla a exibição do modal
  @Input() aluno: Aluno = { id: '', nome: '', plano: { id: 0, nome: '', especificacoes: '', preco: 0}, status: '', aulas: [], contato:'', expiracao: new Date() }; // Dados do aluno
  @Output() saveAluno = new EventEmitter<Aluno>(); // Evento para salvar o aluno
  @Output() closeModal = new EventEmitter<void>(); // Evento para fechar o modal

  save() {
    this.saveAluno.emit(this.aluno);
  }

  close() {
    this.closeModal.emit();
  }
}
