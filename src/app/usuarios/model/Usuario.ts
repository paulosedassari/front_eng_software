import { Endereco } from './Endereco';
export interface Usuario {
  _id: number;
  nome: string;
  cpf: string;
  dtNascimento: Date;
  email: string;
  dtInclusao: Date;
  endereco: Endereco;
  categoria: CONDICAO.ALUNO;
  ra: string;
}

