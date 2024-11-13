import { Aula } from "./aula";
import { Plano } from "./plano";


export interface Aluno {
  id: string;
  nome: string;
  plano: Plano;
  status: string;
  contato: string;
  expiracao: Date;
  aulas:Aula[];
}

