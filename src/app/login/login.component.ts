import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { SidenavComponent } from './../sidenav/sidenav.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  logar() {
    this.authService.fazerLogin(this.usuario);
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
