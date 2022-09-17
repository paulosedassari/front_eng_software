import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { SidenavComponent } from './../sidenav/sidenav.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() usuarioAutenticado = true;

  usuario: Usuario = new Usuario();

  logar() {
    this.authService.fazerLogin(this.usuario);
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  escondeLogin(): string {
    let styleClass = '';
    if (this.usuarioAutenticado === false) {
      styleClass = 'main-esconde';
    } else {
      styleClass = 'main-mostrar';
    }
    return styleClass;
  }
}
