import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Input } from '@angular/core';
import { Livro } from './model/Livro';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '50%'
    });
  }

  livros: Livro[] = [
    {
      _id: 1,
      nome: 'Os Inovadores',
      editora: 'Planeta',
      situacao: 'DISPONIVEL',
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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
