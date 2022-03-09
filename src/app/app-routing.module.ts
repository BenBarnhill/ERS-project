import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseRequestComponent } from './expense/expense-request/expense-request.component';
import { ExpenseResponseComponent } from './expense/expense-response/expense-response.component';
import { ListPendingAllComponent } from './expense/list-pending-all/list-pending-all.component';
import { ListResolvedAllComponent } from './expense/list-resolved-all/list-resolved-all.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'response', component: ExpenseResponseComponent, canActivate:[AuthGuard]},
  {path: 'request', component: ExpenseRequestComponent, canActivate:[AuthGuard]},
  {path: 'pending-all', component: ListPendingAllComponent, canActivate:[AuthGuard]},
  {path: 'resolved-all', component: ListResolvedAllComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
