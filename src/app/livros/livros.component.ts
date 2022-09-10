import { Component, OnInit } from '@angular/core';
import { Livro } from './model/Livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'Disponivel',
      ispb: 1234567,
    },
  ];
  displayedColumns = ['id', 'nome', 'editora', 'situacao', 'ispb'];

  constructor() {}

  ngOnInit(): void {}
}
