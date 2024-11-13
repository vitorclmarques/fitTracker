import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-content',
  templateUrl: './formulario-content.component.html',
  styleUrl: './formulario-content.component.scss'
})
export class FormularioContentComponent {
constructor(private router:Router){

}

  usuario = {
    codigoPersonal: '',
    nome: '',
    email: '',
    cpf: '',
    senha: ''
  };

  onSubmit() {
    if (this.usuario.nome && this.usuario.email && this.usuario.senha) {
      console.log('Usuário cadastrado:', this.usuario);
      // Aqui você pode enviar os dados do usuário para o servidor
    }
    this.router.navigate(['/dashboard/tabela-alunos'])
  }


}
