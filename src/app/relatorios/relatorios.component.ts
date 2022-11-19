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

  baixarPDFAcervo() {
    this.api.baixarPdfRelatAcervoPorData(this.pData, this.sData).subscribe(res => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'RelatorioAcervo.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  baixarPDFUsuarios() {
    this.api.baixarPdfRelatUserPorData(this.pData, this.sData).subscribe(res => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'RelatorioUsuarios.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  baixarPDFEmprestimo() {
    this.api.baixarPdfRelatEmprestPorData(this.pData, this.sData).subscribe(res => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'RelatorioEmprestimo.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  baixarXLSXAcervo() {
    this.api.baixarXLSXRelatAcervoPorData(this.pData, this.sData).subscribe(res => {
      const file = new Blob([res], { type: res.type });
      const url = window.URL.createObjectURL(file);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'RelatorioAcervo.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  baixarXLSXUsuarios() {
    this.api.baixarXLSXRelatUserPorData(this.pData, this.sData).subscribe(res => {
      const file = new Blob([res], { type: res.type });
      const url = window.URL.createObjectURL(file);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'RelatorioUsuarios.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  baixarXLSXEmprestimo() {
    this.api.baixarXLSXRelatEmprestPorData(this.pData, this.sData).subscribe(res => {
      const file = new Blob([res], { type: res.type });
      const url = window.URL.createObjectURL(file);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'RelatorioEmprestimo.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

}
