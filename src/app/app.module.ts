import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import { UsersComponent } from './Components/users/users.component';
import { DeveloperComponent } from './Components/developer/developer.component';
import { IDComponent } from './Components/id/id.component';
import { ChartComponent } from './Components/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
         DashboardComponent,
         UsersComponent,
         DeveloperComponent,
         IDComponent,
         ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
