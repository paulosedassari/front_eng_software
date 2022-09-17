import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Input } from '@angular/core';
import { Livro } from './model/Livro';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {
  @Input() logado = false;

  dataSource!: MatTableDataSource<any>;

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '50%',
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
