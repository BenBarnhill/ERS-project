import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = {
    username: "",
    password: "",
    role: ""
  }

  errorMessage: String = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser(){
    let returnUser: User = this.userService.validateUser(this.newUser)
    if(returnUser.username == ""){
      this.errorMessage = "Invalid credentials!"
    }else{
      if(returnUser.role == "admin"){
        this.router.navigate(['response'])
      }else{
        this.router.navigate(['request'])
      }
      console.log('login successful!')
    }

  }

}
