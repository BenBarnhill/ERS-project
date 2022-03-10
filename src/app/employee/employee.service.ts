import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../expense/expense.model';
import { Employee } from '../user/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:4040/api/v1/employees')
  }

  fetchEmployee(empId: number): Observable<Employee>{
    return this.http.get<Employee>('http://localhost:4040/api/v1/employees/'+empId);
  }

  fetchEmployeeExpenses(empId: number): Observable<Expense[]>{
    return this.http.get<Expense[]>('http://localhost:4040/api/v1/expenses/'+empId);
  }
}
