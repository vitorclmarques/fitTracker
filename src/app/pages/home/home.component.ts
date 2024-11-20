import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isModalVisible: boolean = false;

  // Abre o modal
  showModal() {
    this.isModalVisible = true;
  }

  // Fecha o modal
  closeModal() {
    this.isModalVisible = false;
  }

  // Ação personalizada ao clicar em "Confirmar"
  handleAction() {
    console.log('Ação confirmada!');
    this.closeModal();
  }
}
