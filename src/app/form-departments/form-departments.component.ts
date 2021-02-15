import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../departament.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-departments',
  templateUrl: './form-departments.component.html',
  styleUrls: ['./form-departments.component.css']
})
export class FormDepartmentsComponent implements OnInit {
  // departments: any;

  department={
    name:'',
    description:'',
    numberofemp:''
  }
  constructor(private depService:DepartamentService) {}

  ngOnInit(): void {
    // this.depService.consultDepartments(); 
  }
  
  saveDep() {
    this.depService.insertDepartment(this.department)
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
    this.department.name = ''
    this.department.description = ''
    this.department.numberofemp =''
  }


}
