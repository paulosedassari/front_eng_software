import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
})
export class DialogUserComponent implements OnInit {
  @Output() aoAdicionar = new EventEmitter<any>();

  nome: string = '';
  categoria: string = '';
  ra: string = '';
  dataInclusao: Date = new Date();

  usuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      ra: ['', Validators.required],
      dataInclusao: ['', Validators.required],
    });
  }

  adicionarUsuario() {
    console.log(this.usuarioForm.value);
    const valorEmitir = {
      nome: this.nome,
      categoria: this.categoria,
      ra: this.ra,
      dataInclusao: this.dataInclusao,
    };
    this.aoAdicionar.emit(valorEmitir);
  }
}
