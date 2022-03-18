import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin.model';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginAdmin(admin: Admin): Observable<Admin>{
    return this.http.post<Admin>('http://ec2-54-227-229-86.compute-1.amazonaws.com:9999/api/v1/login/admins', JSON.stringify(admin));
  }

  loginEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>('http://ec2-54-227-229-86.compute-1.amazonaws.com:9999/api/v1/login/employees', JSON.stringify(employee));
  }
}
