import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {
  //Backend routes
  private depAdd = 'http://localhost:3000/department/add';
  private depGet = 'http://localhost:3000/department/get';

  constructor(private http: HttpClient) { }
  insertDepartment(dep: any) {
    return this.http.post<any>(this.depAdd, dep)
  }
  // consultDepartments() {
  //   return this.http.get<[any]>(this.depGet)
  // }
  consultDepartments() {
    return this.http.get(this.depGet);
  }
  
}
