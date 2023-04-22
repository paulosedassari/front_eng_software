import { Usuario } from './usuario';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

interface SidenavToggle {
  usuarioAutenticado: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dialog: MatDialog, private router: Router) { }

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  usuarioAutenticado: boolean = true;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  esconderLoginEmitter = new EventEmitter<boolean>();

  openDialog() {
    this.dialog.open(DialogLoginComponent, {
      width: '35%',
    });
  }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.esconderLoginEmitter.emit(false);
      this.router.navigate(['/dashboard']);
    } else {
      this.openDialog();
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  deslogar() {
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.esconderLoginEmitter.emit(true);
    this.router.navigate(['/login']);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
