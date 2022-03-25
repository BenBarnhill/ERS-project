import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-upload-receipt',
  templateUrl: './upload-receipt.component.html',
  styleUrls: ['./upload-receipt.component.css']
})
export class UploadReceiptComponent implements OnInit {

  selectedFile?: any;
  currentFile?: any;
  fileInfo?: any;

  submitted = false;

  constructor(private expenseService: ExpenseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void{
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      console.log(reader.result)
    }
  }

  submit(): void {
    let submitReceipt = new FormData();
    submitReceipt.append('file', this.selectedFile, this.selectFile.name);

    this.expenseService.uploadReceipt(submitReceipt).subscribe({ next: (event) => {
      this.submitted = true;

      if(this.submitted){
        this.router.navigate(['employee-pending'])
      }
    },
    error: (e) => console.log(e)
  });
  
  }

}
