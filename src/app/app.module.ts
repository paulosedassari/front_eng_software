import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/auth.service';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { LivrosComponent } from './livros/livros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogEmprestComponent } from './dialog-emprest/dialog-emprest.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { registerLocaleData } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import localePt from '@angular/common/locales/pt';
import { AuthGuard } from './guards/auth.guard';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    LivrosComponent,
    BodyComponent,
    UsuariosComponent,
    DialogComponent,
    DialogUserComponent,
    EmprestimoComponent,
    DashboardComponent,
    DialogDeleteComponent,
    DialogEmprestComponent,
    DialogLoginComponent,
    RelatoriosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    MatIconModule,
    MatExpansionModule,
    MatRippleModule
  ],
  providers: [AuthService, AuthGuard, { provide: LOCALE_ID, useValue: 'pt' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
