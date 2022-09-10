import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros.component';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
