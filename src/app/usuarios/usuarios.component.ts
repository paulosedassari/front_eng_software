import { DialogUserComponent } from './../dialog-user/dialog-user.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from './../services/api.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  displayedColumns: String[] = [
    'id',
    'nome',
    'cpf',
    'dtNascimento',
    'email',
    'dtInclusao',
    'endereco',
    'categoria',
    'ra',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog
      .open(DialogUserComponent, {
        width: '50%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'adicionado') {
          this.getAllUsuarios();
        }
      });
  }

  getAllUsuarios() {
    this.api.getUsuarios().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  editarUsuario(row: any) {
    this.dialog
      .open(DialogUserComponent, {
        width: '50%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'atualizado') {
          this.getAllUsuarios();
        }
      });
  }

  deletarUsuario(id: number) {
    this.api.deleteLivro(id).subscribe({
      next: (res) => {
        this.getAllUsuarios();
      },
    });
  }

  openDialogDelete(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: number
  ): void {
    const dialogref = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogref.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deletarUsuario(id);
      }
    });
  }
}
