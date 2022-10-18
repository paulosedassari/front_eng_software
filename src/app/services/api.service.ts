import { Livro } from './../livros/model/Livro';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  postLivro(data: any) {
    return this.http.post<any>('http://localhost:8080/acervo/incluir/', data);
  }

  postUsuario(data: any) {
    return this.http.post<any>('http://localhost:8080/usuario/incluir/', data);
  }

  postEmprestimo(data: any) {
    return this.http.post<any>(
      'http://localhost:8080/emprestimo/incluir/',
      data
    );
  }

  getLivro() {
    return this.http.get<any>('http://localhost:8080/acervo/buscarTodos/');
  }

  getUsuarios() {
    return this.http.get<any>('http://localhost:8080/usuario/buscarTodos/');
  }

  buscarUsuario(id: number) {
    return this.http.get<any>('http://localhost:8080/usuario/buscarUsuario/' + id);
  }

  getEmprestimos() {
    return this.http.get<any>('http://localhost:8080/emprestimo/buscarTodos/');
  }

  putLivro(data: any, id: number) {
    return this.http.put<any>(
      'http://localhost:8080/acervo/alterar/' + id,
      data
    );
  }

  putUsuario(data: any, id: number) {
    return this.http.put<any>(
      'http://localhost:8080/usuario/alterar/' + id,
      data
    );
  }

  deleteLivro(id: number) {
    return this.http.delete<any>('http://localhost:8080/acervo/deletar/' + id);
  }

  deleteUsuario(id: number) {
    return this.http.delete<any>('http://localhost:8080/usuario/deletar/' + id);
  }

  consultaCep(cep: number) {
    return this.http.get<any>('https://viacep.com.br/ws/' + cep + '/json/');
  }
}
