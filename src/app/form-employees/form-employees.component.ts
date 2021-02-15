import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-employees',
  templateUrl: './form-employees.component.html',
  styleUrls: ['./form-employees.component.css']
})
export class FormEmployeesComponent implements OnInit {
  // employees: any;

  employee={
    name:'',
    gender:'',
    salary:'',
    position:''
  }
  constructor(private empService:EmployeeService) {}
  ngOnInit(): void {
    // this.depService.consultDepartments(); 
  }
  saveEmp() {
    this.empService.insertEmployee(this.employee)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Realizado',
          text: 'Registro guardado con exito',
          // footer: '<a href>Pro</a>'
        })
        this.cleanData()
      },
        err => console.log(err))
  }
  cleanData() {
    //Clean 
    this.employee.name = ''
    this.employee.gender = ''
    this.employee.salary =''
    this.employee.position =''
  }



}
