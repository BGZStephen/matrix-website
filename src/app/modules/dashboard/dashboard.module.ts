import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// router
import { AppRoutes } from '../../app.routes';

// components
import {
  DashboardLoginComponent, DashboardWrapperComponent, DashboardNavbarComponent, DashboardHomeComponent,
  DashboardNotificationBarComponent
} from './components/dashboard-components-barrel';

@NgModule({
  declarations: [
    DashboardLoginComponent,
    DashboardWrapperComponent,
    DashboardNavbarComponent,
    DashboardHomeComponent,
    DashboardNotificationBarComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class DashboardModule { }
