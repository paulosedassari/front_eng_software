import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
})
export class DialogUserComponent implements OnInit {
  // @Output() aoAdicionar = new EventEmitter<any>();

  // nome: string = '';
  // categoria: string = '';
  // ra: string = '';
  // dataInclusao: Date = new Date();

  // nomeFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  usuarioForm!: FormGroup;
  acaoBotao: string = 'Adicionar';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public editarDado: any,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      categoria: ['', Validators.required],
      ra: ['', Validators.required],
    });

    if (this.editarDado) {
      this.acaoBotao = 'Salvar';
      this.usuarioForm.controls['nome'].setValue(this.editarDado.nome);
      this.usuarioForm.controls['categoria'].setValue(
        this.editarDado.categoria
      );
      this.usuarioForm.controls['ra'].setValue(this.editarDado.ra);
    }
  }

  adicionarUsuario() {
    if (!this.editarDado) {
      if (this.usuarioForm.valid) {
        this.api.postUsuario(this.usuarioForm.value).subscribe({
          next: (res) => {
            this.usuarioForm.reset();
            this.dialogRef.close('adicionado');
          },
        });

        this.usuarioForm.reset();
        this.dialogRef.close();
      } else {
        this.updateUsuario();
      }
    }
    // const valorEmitir = {
    //   nome: this.nome,
    //   categoria: this.categoria,
    //   ra: this.ra,
    //   dataInclusao: this.dataInclusao,
    // };
    // this.aoAdicionar.emit(valorEmitir);
  }

  updateUsuario() {
    this.api.putUsuario(this.usuarioForm.value, this.editarDado.id).subscribe({
      next: (res) => {
        this.usuarioForm.reset();
        this.dialogRef.close('atualizado');
      },
    });
  }
}
