import { ApiService } from './../services/api.service';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogNegaExclusaoComponent } from '../dialog-nega-exclusao/dialog-nega-exclusao.component';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {
  @Input() logado = false;

  displayedColumns: String[] = [
    'idObra',
    'nomeObra',
    'editora',
    'dtInclusaoObra',
    'dtPublicacao',
    'status',
    'isbn',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllLivros();
  }

  openDialog() {
    this.dialog
      .open(DialogComponent, {
        width: '50%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'adicionado') {
          this.getAllLivros();
        }
      });
  }

  getAllLivros() {
    this.api.getLivro().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  editarLivro(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '50%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'atualizado') {
          this.getAllLivros();
        }
      });
  }

  deletarLivro(id: number) {
    this.api.deleteLivro(id).subscribe({
      next: (res) => {
        if (res == false) {
          this.dialog
            .open(DialogNegaExclusaoComponent, {
              width: '30%',
            });
        }
        this.getAllLivros();
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

  openDialogDelete(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: number
  ): void {
    const dialogref = this.dialog.open(DialogDeleteComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogref.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deletarLivro(id);
      }
    });
  }
}
