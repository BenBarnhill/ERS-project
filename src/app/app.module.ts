import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ExpenseResponseComponent } from './expense/expense-response/expense-response.component';
import { ExpenseRequestComponent } from './expense/expense-request/expense-request.component';
import { ListPendingAllComponent } from './expense/list-pending-all/list-pending-all.component';
import { ListResolvedAllComponent } from './expense/list-resolved-all/list-resolved-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    ExpenseResponseComponent,
    ExpenseRequestComponent,
    ListPendingAllComponent,
    ListResolvedAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
