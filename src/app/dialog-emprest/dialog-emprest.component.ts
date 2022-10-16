import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-emprest',
  templateUrl: './dialog-emprest.component.html',
  styleUrls: ['./dialog-emprest.component.scss'],
})
export class DialogEmprestComponent implements OnInit {
  emprestimoForm!: FormGroup;
  acaoBotao: string = 'Adicionar';

  raFormControl = new FormControl('', [Validators.required]);
  isbnFormControl = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEmprestComponent>,
    @Inject(MAT_DIALOG_DATA) public editarDado: any,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.emprestimoForm = this.formBuilder.group({
      ra: ['', Validators.required],
      isbn: ['', Validators.required],
    });

    if (this.editarDado) {
      this.acaoBotao = 'Salvar';
      this.emprestimoForm.controls['ra'].setValue(this.editarDado.ra);
      this.emprestimoForm.controls['isbn'].setValue(this.editarDado.isbn);
    }
  }

  adicionarEmprestimo() {
    if (!this.editarDado) {
      if (this.emprestimoForm.valid) {
        console.log(this.emprestimoForm.value);
        this.api.postEmprestimo(this.emprestimoForm.value).subscribe({
          next: (res) => {
            this.emprestimoForm.reset();
            this.dialogRef.close('adicionado');
          },
        });
        this.emprestimoForm.reset();
        this.dialogRef.close();
      }
    } else {
      // this.updateLivro();
    }
  }
}
