import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReimbursementRequestComponent } from './reimbursement-request/reimbursement-request.component';
import { ReimbursementResponseComponent } from './reimbursement-response/reimbursement-response.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'request', component: ReimbursementRequestComponent, canActivate: [AuthGuard]},
  {path: 'response', component: ReimbursementResponseComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
