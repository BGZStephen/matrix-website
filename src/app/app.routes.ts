import { Routes, RouterModule } from '@angular/router';

import { DashboardLoginComponent } from './modules/dashboard/components/dashboard-components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: DashboardLoginComponent},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
