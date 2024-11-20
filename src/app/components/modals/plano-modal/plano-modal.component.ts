import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plano } from '../../../interface/plano';

@Component({
  selector: 'app-plano-modal',
  templateUrl: './plano-modal.component.html',
  styleUrl: './plano-modal.component.scss'
})
export class PlanoModalComponent {
  @Input() visible: boolean = false; // Controla a exibição do modal
  @Input() plano: Plano = {  id: 0, nome: '', especificacoes: '', preco:0  }; // Dados do plano
  @Output() savePlano = new EventEmitter<Plano>(); // Evento para salvar o plano
  @Output() closeModal = new EventEmitter<void>(); // Evento para fechar o modal

  save() {
    this.savePlano.emit(this.plano);
  }

  close() {
    this.closeModal.emit();
  }

}
