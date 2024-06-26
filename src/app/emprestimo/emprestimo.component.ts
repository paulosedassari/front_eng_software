import { DialogEmprestComponent } from './../dialog-emprest/dialog-emprest.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { DialogDesassociaComponent } from '../dialog-desassocia/dialog-desassocia.component';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss'],
})
export class EmprestimoComponent implements OnInit {
  displayedColumns: String[] = [
    'idEmprestimo',
    'nomeUsuario',
    'nomeObra',
    'isbn',
    'dtEmprestimo',
    'dtDevolucao',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllEmprestimos();
  }

  openDialog() {
    this.dialog
      .open(DialogEmprestComponent, {
        width: '50%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'adicionado') {
          this.getAllEmprestimos();
        }
      });
  }

  getAllEmprestimos() {
    this.api.getEmprestimos().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  dialogDesassociarEmprest(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: number
  ) {
    const dialogref = this.dialog.open(DialogDesassociaComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogref.afterClosed().subscribe((result) => {
      if (result === true) {
        this.desassociarObra(id);
      }
    });
  }

  desassociarObra(id: number) {
    this.api.desassociarObra(id).subscribe({
      next: (res) => {
        this.getAllEmprestimos();
      },
    });
  }
}
