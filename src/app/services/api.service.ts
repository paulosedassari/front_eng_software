import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postLivro(data: any) {
    return this.http.post<any>('http://localhost:3000/listaDeLivros/', data);
  }

  getLivro() {
    return this.http.get<any>('http://localhost:3000/listaDeLivros/');
  }

  putLivro(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/listaDeLivros/' + id, data);
  }

  deleteLivro(id: number) {
    return this.http.delete<any>('http://localhost:3000/listaDeLivros/' + id);
  }
}
