import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss']
})
export class EmprestimoComponent implements OnInit {

  displayedColumns: String[] = [
    'idEmprestimo',
    'nomeUsuario',
    'catUsuario',
    'nomeObra',
    'editora',
    'isbn',
    'dataEmprestimo',
    'dataDevolucao',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
