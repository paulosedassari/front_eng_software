import { ApiService } from './../services/api.service';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {
  @Input() logado = false;

  displayedColumns: String[] = [
    'id',
    'nome',
    'editora',
    'dataInclusao',
    'status',
    'isbn',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

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
        alert('Livro excluído com sucesso!');
        this.getAllLivros();
      },
      error: (res) => {
        alert('Erro ao excluir Livro!');
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
}
