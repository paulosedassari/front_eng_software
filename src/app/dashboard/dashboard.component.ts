import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogSairComponent } from '../dialog-sair/dialog-sair.component';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../login/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dialog: MatDialog, private api: ApiService, private router: Router, private authService: AuthService) { }

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

  dialogSair(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    const dialogref = this.dialog.open(DialogSairComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogref.afterClosed().subscribe((result) => {
      // this.router.navigate(['/login'])
      if (result === true) {
        this.authService.deslogar();
      }
    });
  }

}
