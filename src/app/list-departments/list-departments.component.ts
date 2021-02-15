import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../departament.service';

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})

export class ListDepartmentsComponent implements OnInit{
  departments: any;

  constructor(private depService:DepartamentService) {}

  ngOnInit(): void {
    this.getDep()
    // console.log(this.departments)
  }
  getDep() {
    //Get values of observable
    this.depService.consultDepartments().subscribe((dep) => { 
      this.departments = dep;
      console.log(dep)
    });
  }
}
