import { DashboardRoutingModule } from './dashboard.routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: []
})

export class DashboardModule{}
