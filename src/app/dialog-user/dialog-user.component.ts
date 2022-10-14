import { Endereco } from './../usuarios/model/Endereco';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
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

  nomeFormControl = new FormControl('', [Validators.required]);
  cpfFormControl = new FormControl('', [Validators.required]);
  dtNascimentoFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  categoriaFormControl = new FormControl('', [Validators.required]);
  raFormControl = new FormControl('', [Validators.required]);

  usuarioForm!: FormGroup;
  acaoBotao: string = 'Adicionar';
  cep: number = 0;
  logradouro: string = '';
  bairro: string = '';
  localidade: string = '';
  uf: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public editarDado: any,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      dtNascimento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      categoria: new FormControl('', [Validators.required]),
      ra: new FormControl('', [Validators.required]),
      cep: new FormControl('', []),
      logradouro: new FormControl('', [Validators.required]),
      localidade: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
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

  buscaCep() {
    this.api.consultaCep(this.usuarioForm.value.cep).subscribe({
      next: (res) => {
        this.logradouro = res.logradouro;
        this.bairro = res.bairro;
        this.localidade = res.localidade;
        this.uf = res.uf;
      },
    });
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
