import { ApiService } from './../services/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
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
      nome: ['', Validators.required],
      editora: ['', Validators.required],
      status: ['', Validators.required],
      isbn: ['', Validators.required],
    });

    if (this.editarDado) {
      this.acaoBotao = 'Salvar';
      this.livroForm.controls['nome'].setValue(this.editarDado.nome);
      this.livroForm.controls['editora'].setValue(this.editarDado.editora);
      this.livroForm.controls['status'].setValue(this.editarDado.status);
      this.livroForm.controls['isbn'].setValue(this.editarDado.isbn);
    }
  }

  adicionarLivro() {
    if (!this.editarDado) {
      if (this.livroForm.valid) {
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
    this.api.putLivro(this.livroForm.value, this.editarDado.id).subscribe({
      next: (res) => {
        this.livroForm.reset();
        this.dialogRef.close('atualizado');
      },
    });
  }
}
