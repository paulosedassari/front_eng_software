import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogNegaEmprestComponent } from '../dialog-nega-emprest/dialog-nega-emprest.component';

@Component({
  selector: 'app-dialog-emprest',
  templateUrl: './dialog-emprest.component.html',
  styleUrls: ['./dialog-emprest.component.scss'],
})
export class DialogEmprestComponent implements OnInit {
  emprestimoForm!: FormGroup;
  acaoBotao: string = 'Associar';

  raFormControl = new FormControl('', [Validators.required]);
  isbnFormControl = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEmprestComponent>,
    @Inject(MAT_DIALOG_DATA) public editarDado: any,
    private api: ApiService,
    private dialog: MatDialog
  ) { }

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
        this.api.postEmprestimo(this.emprestimoForm.value).subscribe({
          next: (res) => {
            if (res === false) {
              this.dialog
                .open(DialogNegaEmprestComponent, {
                  width: '25%',
                });
            }
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
