import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private authService: AuthService){}

  validateUser(newUser: User): User{
    if(newUser.role == "admin" && newUser.username == "admin" && newUser.password == "admin"){
      this.authService.storeUser(newUser);
      this.authService.loggedIn = true;
    }else if(newUser.role == "employee" && newUser.username == "employee" && newUser.password == "employee"){
      this.authService.storeUser(newUser);
      this.authService.loggedIn = true;
    }else{
      newUser = {
        username: "",
        password: "",
        role: "",
      }
    }

    return newUser;
  }


}
