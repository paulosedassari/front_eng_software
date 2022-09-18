import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  livroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.livroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      editora: ['', Validators.required],
      dataInclusao: ['', Validators.required],
      status: ['', Validators.required],
      ispb: ['', Validators.required],
    });
  }

  adicionarLivro() {
    if (this.livroForm.valid) {
      this.api.postLivro(this.livroForm.value).subscribe({
        next: (res) => {
          alert('Livro Adicionado com Sucesso!');
        },
        error: () => {
          alert('Erro ao Adicionar Livro!');
        },
      });

      this.livroForm.reset();
      this.dialogRef.close();
    } else {
      alert('Preencha os campos corretamente!');
    }
  }
}
