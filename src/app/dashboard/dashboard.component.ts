import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 0;
  color: string = "";

  baixarPdf() {
    this.api.baixarPdf().subscribe(res => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  baixarXLSX() {
    // this.api.baixarXLSX().subscribe(res => {
    //   let url = window.URL.createObjectURL(res);
    //   let a = document.createElement('a');
    //   a.href = url;
    //   a.download = 'Download XLSX';
    //   a.click();
    //   window.URL.revokeObjectURL(url);
    //   a.remove();
    // });
  }


  acervo() {
    this.router.navigate(['/livros']);
  }

  usuario() {
    this.router.navigate(['/usuarios']);
  }

  emprestimo() {
    this.router.navigate(['/emprestimos']);
  }

  relatorio() {
    this.router.navigate(['/relatorios']);
  }

}
