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

  nomeUsuarioFormControl = new FormControl('', [Validators.required]);
  cpfFormControl = new FormControl('', [Validators.required]);
  dtNascimentoFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required]);
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
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nomeUsuario: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      dtNascimento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      ra: new FormControl('', [Validators.required]),
      cep: new FormControl('', []),
      logradouro: new FormControl('', [Validators.required]),
      localidade: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
      numLogradouro: new FormControl('', [Validators.required]),
    });

    if (this.editarDado) {
      console.log("bate edita dados")
      this.acaoBotao = 'Salvar';
      this.api.buscarUsuario(this.editarDado.idUsuario).subscribe({
        next: (res) => {
          this.usuarioForm.controls['nomeUsuario'].setValue(res.nomeUsuario);
          this.usuarioForm.controls['email'].setValue(res.email);
          this.usuarioForm.controls['telefone'].setValue(res.telefone);
          this.usuarioForm.controls['categoria'].setValue(
            res.categoria
          );
          this.usuarioForm.controls['cep'].setValue(res.cep);
          this.usuarioForm.controls['uf'].setValue(res.uf);
          this.usuarioForm.controls['localidade'].setValue(res.localidade);
          this.usuarioForm.controls['logradouro'].setValue(res.logradouro);
          this.usuarioForm.controls['bairro'].setValue(res.bairro);
          this.usuarioForm.controls['numLogradouro'].setValue(res.numero);
        }
      })
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
    console.log("bate aqui")
    this.api.putUsuario(this.usuarioForm.value, this.editarDado.idUsuario).subscribe({
      next: (res) => {
        this.usuarioForm.reset();
        this.dialogRef.close('atualizado');
      },
    });
  }
}
