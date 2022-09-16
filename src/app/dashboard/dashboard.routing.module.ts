import { EmprestimoComponent } from './../emprestimo/emprestimo.component';
import { UsuariosComponent } from './../usuarios/usuarios.component';
import { LivrosComponent } from './../livros/livros.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const dashRoutes = [
  { path: 'livros', component: LivrosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'emprestimos', component: EmprestimoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
