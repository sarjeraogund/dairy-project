import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_id: string = '';

  model:LoginViewModel = {
    user_id:'',
    password:'',
    rememberme:'',
    invalidLogin: false
  }
  constructor(private router: Router,private loginservice: AuthenticationService) {}

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.model.user_id, this.model.password)
    ) {
      this.router.navigate([''])
      this.model.invalidLogin = false
    } else
      this.model.invalidLogin = true
  }

  /* onSubmitLogin(): void{
    //user: Users;
    this.apiService.LoginUser(this.model.user_id).subscribe(
      result => {
        //this.model.user_id=result;
        alert("success");
        console.log(result);
      },
      error =>{
        alert("error occured");
      },
      () => {
        alert("ok");
      }
    );    
  } */
}

export interface LoginViewModel{
  user_id: string,
  password: string,
  rememberme: string,
  invalidLogin: any
}
