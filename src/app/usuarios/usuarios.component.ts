import { DialogUserComponent } from './../dialog-user/dialog-user.component';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/Usuario';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  openDialog() {
    this.dialog.open(DialogUserComponent, {
      width: '50%',
    });
  }

  usuarios: Usuario[] = [
    {
      _id: 1,
      nome: 'Paulo',
      categoria: 'Aluno',
      ra: '123456789',
    },
  ];

  displayedColumns = ['id', 'nome', 'categoria', 'ra', 'dataInclusao'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
}
