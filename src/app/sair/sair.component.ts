import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogSairComponent } from '../dialog-sair/dialog-sair.component';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.scss']
})
export class SairComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltarHome() {
    this.router.navigate(['/dashboard']);
  }

}
