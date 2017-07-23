import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// modules
import { DashboardModule } from './modules/dashboard/dashboard.module';

// Routes
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DashboardModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
