import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    //Backend routes
  private empAdd = 'http://localhost:3000/employee/add';
  private empGet = 'http://localhost:3000/employee/get';
  constructor(private http: HttpClient) { }
  insertEmployee(emp: any) {
    return this.http.post<any>(this.empAdd, emp)
  }
  consultEmployee() {
    return this.http.get<any>(this.empGet)
  }
}
