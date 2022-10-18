import { ApiService } from './../services/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  nomeFormControl = new FormControl('', [Validators.required]);
  editoraFormControl = new FormControl('', [Validators.required]);
  dtPublicacaoFormControl = new FormControl('', [Validators.required]);
  statusFormControl = new FormControl('', [Validators.required]);
  isbnFormControl = new FormControl('', [Validators.required]);

  livroForm!: FormGroup;
  acaoBotao: string = 'Adicionar';
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editarDado: any,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.livroForm = this.formBuilder.group({
      nomeObra: ['', Validators.required],
      editora: ['', Validators.required],
      dtPublicacao: new FormControl('', [Validators.required]),
      status: ['', Validators.required],
      isbn: ['', Validators.required],
    });

    if (this.editarDado) {
      this.acaoBotao = 'Salvar';
      this.livroForm.controls['nomeObra'].setValue(this.editarDado.nomeObra);
      this.livroForm.controls['editora'].setValue(this.editarDado.editora);
      this.livroForm.controls['dtPublicacao'].setValue(this.editarDado.dtPublicacao);
      this.livroForm.controls['status'].setValue(this.editarDado.status);
      this.livroForm.controls['isbn'].setValue(this.editarDado.isbn);
    }
  }

  adicionarLivro() {
    if (!this.editarDado) {
      if (this.livroForm.valid) {
        console.log(this.livroForm.value)
        this.api.postLivro(this.livroForm.value).subscribe({
          next: (res) => {
            this.livroForm.reset();
            this.dialogRef.close('adicionado');
          },
        });
        this.livroForm.reset();
        this.dialogRef.close();
      }
    } else {
      this.updateLivro();
    }
  }

  updateLivro() {
    this.api.putLivro(this.livroForm.value).subscribe({
      next: (res) => {
        this.livroForm.reset();
        this.dialogRef.close('atualizado');
      },
    });
  }
}
