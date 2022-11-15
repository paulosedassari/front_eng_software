import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Relatorio } from './relatorio';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  dados: Relatorio = new Relatorio();

  pData: Date = new Date('dd/MM/yyyy');
  sData: Date = new Date('dd/MM/yyyy');

  exibe() {
    console.log(this.pData)
    console.log(this.sData)
    this.api.relatorioEmprestimo(this.pData, this.sData).subscribe(res => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Relatorio Emprestimo';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

}
