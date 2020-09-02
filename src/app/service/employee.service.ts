import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API_BUSES = 'http://localhost:8080/employee'; // khai bao API trung voi request mapping trong backend
  constructor(private httpClient: HttpClient) { }

  showEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.API_BUSES}/list`);
  }
  createEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.API_BUSES}/create`, employee);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_BUSES}/${id}`);
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.API_BUSES}/update/${employee.id}`, employee);
  }
  deleteEmployeeByID(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.API_BUSES}/delete/` + `${id}`);
  }

}
