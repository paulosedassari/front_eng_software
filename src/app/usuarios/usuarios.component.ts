import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [
    {
      _id: 1,
      nome: 'Paulo',
      categoria: 'Aluno',
      ra: '123456789',
    },
  ];

  displayedColumns = ['id', 'nome', 'categoria', 'ra'];

  constructor() {}

  ngOnInit(): void {}
}
