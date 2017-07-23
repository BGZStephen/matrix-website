import { Routes, RouterModule } from '@angular/router';

import {
  DashboardLoginComponent, DashboardWrapperComponent, DashboardHomeComponent,
} from './modules/dashboard/components/dashboard-components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: DashboardLoginComponent},
  {path: 'dashboard', component: DashboardWrapperComponent, children: [
    {path: '', component: DashboardHomeComponent}
  ]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
