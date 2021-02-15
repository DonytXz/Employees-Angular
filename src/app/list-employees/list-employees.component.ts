import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent  implements OnInit {
  employees: any;
  
  constructor(private empService:EmployeeService) {}

  ngOnInit(): void {
    this.getEmp()

    
  }
  getEmp() {
    //Get values of observable
    this.empService.consultEmployee().subscribe((emp) => { 
      this.employees = emp;
      this.employees.reverse()
      console.log(this.employees)
    });

  }
}
