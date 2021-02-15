import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Lists
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
//Departments
import { FormEmployeesComponent } from './form-employees/form-employees.component'
import { FormDepartmentsComponent } from './form-departments/form-departments.component';

const routes: Routes = [
  //Lists path
  {path: 'listEmployees', component:ListEmployeesComponent},
  {path: 'listDeparments', component:ListDepartmentsComponent},
  //Departments path
  {path: 'formEmployees', component:FormEmployeesComponent},
  {path: 'formDeparments', component:FormDepartmentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
