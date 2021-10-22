import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GraphComponent } from './Components/graph/graph.component';
import { WidgetsComponent } from './Components/widgets/widgets.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'widgets', component : WidgetsComponent},
  {path :'charts', component : GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
