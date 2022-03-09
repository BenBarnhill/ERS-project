import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-list-pending-all',
  templateUrl: './list-pending-all.component.html',
  styleUrls: ['./list-pending-all.component.css']
})
export class ListPendingAllComponent implements OnInit {

  allExpenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadAllPending();
  }

  loadAllPending(){
    this.expenseService.fetchAllPending().subscribe((response) => {
      console.log(response);
      this.allExpenses = response;
    });
  }

  denyRequest(){

  }

  approveRequest(){

  }

}
