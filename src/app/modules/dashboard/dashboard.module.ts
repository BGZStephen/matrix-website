import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';

@NgModule({
  declarations: [
  DashboardLoginComponent],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
})
export class DashboardModule { }
