import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { WidgetsComponent } from './Components/widgets/widgets.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'widgets', component : WidgetsComponent},
  {path : 'chart', component : BarChartComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
