import { Usuario } from './usuario';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

interface SidenavToggle {
  usuarioAutenticado: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  usuarioAutenticado = true;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  esconderLoginEmitter = new EventEmitter<boolean>();


  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.esconderLoginEmitter.emit(false);
      this.router.navigate(['/livros']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
}
