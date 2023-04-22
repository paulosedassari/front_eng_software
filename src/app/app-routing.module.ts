import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LivrosComponent } from './livros/livros.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AuthGuard } from './guards/auth.guard';
import { SairComponent } from './sair/sair.component';
import { DialogSairComponent } from './dialog-sair/dialog-sair.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'livros', component: LivrosComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'emprestimos', component: EmprestimoComponent, canActivate: [AuthGuard] },
  { path: 'relatorios', component: RelatoriosComponent, canActivate: [AuthGuard] },
  { path: 'sair', component: SairComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
