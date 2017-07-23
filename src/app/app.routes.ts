import { Routes, RouterModule } from '@angular/router';

import {
  DashboardLoginComponent, DashboardWrapperComponent, DashboardHomeComponent,
} from './modules/dashboard/components/dashboard-components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: DashboardLoginComponent},
  {path: 'dashboard', component: DashboardWrapperComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: DashboardHomeComponent, outlet: 'dashboardOutlet'},
    {path: 'testing', component: DashboardHomeComponent, outlet: 'dashboardOutlet'},
  ]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
