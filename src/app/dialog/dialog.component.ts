import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  livroForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.livroForm = this.formBuilder.group({
      nome : ['', Validators.required],
      editora : ['', Validators.required],
      dataInclusao : ['', Validators.required],
      status : ['', Validators.required],
      ispb : ['', Validators.required]
    })
  }

  adicionarLivro() {
    console.log(this.livroForm.value)
  }

}
