import { Livro } from './../livros/model/Livro';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  postLivro(data: any) {
    return this.http.post<any>('http://localhost:8080/usuario/incluir/', data, this.httpOptions);
  }

  postUsuario(data: any) {
    return this.http.post<any>('http://localhost:8080/usuario/incluir/', data);
  }

  getLivro() {
    return this.http.get<any>('http://localhost:8080/usuario/teste/', this.httpOptions);
  }

  getUsuarios() {
    return this.http.get<any>('http://localhost:3000/listaDeLivros/');
  }

  putLivro(data: any, id: number) {
    return this.http.put<any>(
      'http://localhost:3000/listaDeLivros/' + id,
      data
    );
  }

  putUsuario(data: any, id: number) {
    return this.http.put<any>(
      'http://localhost:3000/listaDeLivros/' + id,
      data
    );
  }

  deleteLivro(id: number) {
    return this.http.delete<any>('http://localhost:3000/listaDeLivros/' + id);
  }
}
