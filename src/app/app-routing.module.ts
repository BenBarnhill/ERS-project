import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeExpensesComponent } from './employee/list-employee-expenses/list-employee-expenses.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { ExpenseRequestComponent } from './expense/expense-request/expense-request.component';
import { ListPendingAllComponent } from './expense/list-pending-all/list-pending-all.component';
import { ListResolvedAllComponent } from './expense/list-resolved-all/list-resolved-all.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'request', component: ExpenseRequestComponent, canActivate:[AuthGuard]},
  {path: 'pending-all', component: ListPendingAllComponent, canActivate:[AuthGuard]},
  {path: 'resolved-all', component: ListResolvedAllComponent, canActivate:[AuthGuard]},
  {path: 'list-employees', component: ListEmployeesComponent, canActivate:[AuthGuard]},
  {path: 'list-employee-expense', component: ListEmployeeExpensesComponent, canActivate:[AuthGuard]},
  {path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
