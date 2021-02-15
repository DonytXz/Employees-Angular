import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import { FormEmployeesComponent } from './form-employees/form-employees.component';
import { FormDepartmentsComponent } from './form-departments/form-departments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {OverlayModule} from '@angular/cdk/overlay'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListEmployeesComponent,
    ListDepartmentsComponent,
    FormEmployeesComponent,
    FormDepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    OverlayModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
