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
      console.log(this.editarDado)
      this.usuarioForm.controls['nomeUsuario'].setValue(this.editarDado.nomeUsuario);
      this.usuarioForm.controls['categoria'].setValue(
        this.editarDado.categoria
      );
      this.usuarioForm.controls['ra'].setValue(this.editarDado.ra);
      this.usuarioForm.controls['email'].setValue(this.editarDado.email);
      this.usuarioForm.controls['cpf'].setValue(this.editarDado.cpf);
      this.usuarioForm.controls['dtNascimento'].setValue(this.editarDado.dtNascimento);
      this.usuarioForm.controls['telefone'].setValue(this.editarDado.telefone);
      this.usuarioForm.controls['cep'].setValue(this.editarDado.cep);
      this.usuarioForm.controls['logradouro'].setValue(this.editarDado.logradouro);
      this.usuarioForm.controls['localidade'].setValue(this.editarDado.localidade);
      this.usuarioForm.controls['bairro'].setValue(this.editarDado.bairro);
      this.usuarioForm.controls['uf'].setValue(this.editarDado.uf);
      this.usuarioForm.controls['numLogradouro'].setValue(this.editarDado.numLogradouro);
    }
  }

  buscaCep() {
    this.api.consultaCep(this.usuarioForm.value.cep).subscribe({
      next: (res) => {
        this.usuarioForm.patchValue({
          logradouro: res.logradouro,
          bairro: res.bairro,
          localidade: res.localidade,
          uf: res.uf
        })
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
      }
    } else {
      this.updateUsuario();
    }
  }

  updateUsuario() {
    console.log("bate aqui")
    this.api.putUsuario(this.usuarioForm.value, this.editarDado.idUsuario).
      subscribe({
        next: (res) => {
          this.usuarioForm.reset();
          this.dialogRef.close('atualizado');
        },
      });
  }
}
