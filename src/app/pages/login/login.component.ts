import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private router:Router){

}
  onSubmit() {
    // if (this.usuario.nome && this.usuario.email && this.usuario.senha) {
    //   console.log('Usuário cadastrado:', this.usuario);
    //   // Aqui você pode enviar os dados do usuário para o servidor
    // }}
    this.router.navigate(['/dashboard'])
}
}
