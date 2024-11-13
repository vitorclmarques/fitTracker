// mock.service.ts
import { Injectable } from '@angular/core';
import { Aluno } from '../interface/aluno';
import { Plano } from '../interface/plano';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  private planos: Plano[] = [];

  constructor() {
    this.initPlanos();
  }

  async initPlanos() {
    this.planos = await this.getPlanos();
  }

  // Método para buscar um plano pelo id ou retornar um plano padrão
  private findPlanoById(id: number): Plano {
    const plano = this.planos.find(plano => plano.id === id);
    console.log('Plano encontrado:', plano); // Adicione este log para depuração
    return plano || { id: 0, nome: 'Padrão', especificacoes: 'Plano padrão', preco: 0 };
  }

  // Carregar os alunos depois de carregar os planos
  getAlunos(): Promise<Aluno[]> {
    return this.initPlanos().then(() => {
      return [
        {
          id: '1',
          nome: 'John Doe',
          plano: this.findPlanoById(1), // Associa o plano pelo id
          status: 'Ativo',
          contato: '123-456',
          expiracao: new Date(),
          aulas: [
            { dia: 'Segunda-feira', horario: '14:00' },
            { dia: 'Quarta-feira', horario: '16:00' }
          ]
        },
        {
          id: '2',
          nome: 'Joao',
          plano: this.findPlanoById(2), // Associa o plano pelo id
          status: 'Ativo',
          contato: '123-456',
          expiracao: new Date(),
          aulas: [
            { dia: 'Terça-feira', horario: '15:00' },
            { dia: 'Quinta-feira', horario: '17:00' }
          ]
        },
        // outros alunos...
      ];
    });
  }

  getPlanos(): Promise<Plano[]> {
    return Promise.resolve([
      { id: 1, nome: 'Gold', especificacoes: 'Plano com benefícios avançados', preco: 100.0 },
      { id: 2, nome: 'Silver', especificacoes: 'Plano intermediário', preco: 75.0 },
      { id: 3, nome: 'Bronze', especificacoes: 'Plano básico', preco: 50.0 },
    ]);
  }
}
