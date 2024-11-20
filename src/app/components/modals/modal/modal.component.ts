import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from '../../../interface/aluno';
import { Plano } from '../../../interface/plano';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() visible: boolean = false; // Controla a visibilidade do modal
  @Input() aluno: Aluno = {
    id: '',
    nome: '',
    plano: { id: 0, nome: '', especificacoes: '', preco: 0 },
    status: '',
    aulas: [],
    contato: '',
    expiracao: new Date()
  }; // Dados do aluno para cadastro
  @Input() planos: Plano[] = [
    { id: 1, nome: 'Gold', especificacoes: 'Plano com benefícios avançados', preco: 100.0 },
      { id: 2, nome: 'Silver', especificacoes: 'Plano intermediário', preco: 75.0 },
      { id: 3, nome: 'Bronze', especificacoes: 'Plano básico', preco: 50.0 }

  ]; // Lista de planos disponíveis
  @Output() saveAluno = new EventEmitter<Aluno>(); // Emite o aluno quando salvo
  @Output() closeModal = new EventEmitter<void>(); // Emite evento para fechar o modal

  aula = { dia: '', horario: '' }; // Objeto para armazenar dados temporários da aula

  save() {
    this.saveAluno.emit(this.aluno); // Emite o aluno para ser salvo
  }

  close() {
    this.closeModal.emit(); // Emite evento para fechar o modal
  }

  addAula() {

      this.aluno.aulas.push({ ...this.aula }); // Adiciona a aula à lista de aulas do aluno
      this.aula = { dia: '', horario: '' }; // Limpa os campos do formulário de aula

  }

}
