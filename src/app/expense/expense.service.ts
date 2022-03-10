import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../user/admin.model';
import { Employee } from '../user/employee.model';
import { Expense } from './expense.model';
import { Final } from './final.model';
import { ListPendingAllComponent } from './list-pending-all/list-pending-all.component';
import { Pending } from './pending.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  fetchAdmin(adminId: number): Observable<Admin>{
    return this.http.get<Admin>('http://localhost:4040/api/v1/admin/'+adminId);
  }

  fetchAllPending(): Observable<Expense[]>{
    return this.http.get<Expense[]>('http://localhost:4040/api/v1/requests');
  }

  fetchAllFinal(): Observable<Expense[]>{
    return this.http.get<Expense[]>('http://localhost:4040/api/v1/resolutions')
  }

  deletePending(pendingId: number): Observable<Expense>{
    return this.http.delete<Expense>('http://localhost:4040/api/v1/requests/'+pendingId);
  }

  approveRequest(pendingModel: Pending): Observable<Final>{
    return this.http.post<Final>('http://localhost:4040/api/v1/requests/approve', JSON.stringify(pendingModel));
  }

  denyRequest(pendingModel: Pending): Observable<Final>{
    return this.http.post<Final>('http://localhost:4040/api/v1/requests/deny', JSON.stringify(pendingModel))
  }

  fetchPending(pendingId: number): Observable<Pending>{
    return this.http.get<Pending>('http://localhost:4040/api/v1/requests/'+pendingId);
  }


}
