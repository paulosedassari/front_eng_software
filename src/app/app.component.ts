import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sistema_gerenciador_biblioteca';

  mostrarMenu: boolean = false;

  escondeLogin: boolean = true;

  isSidenavCollapsed = false;
  screenWidth = 0;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
    this.authService.esconderLoginEmitter.subscribe(
      (esconder) => (this.escondeLogin = esconder)
    );
  }

  onToggleSidenav(data: SidenavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSidenavCollapsed = data.collapsed;
  }

}
