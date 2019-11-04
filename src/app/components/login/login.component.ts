import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Users } from '../users/model/Users';

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
  constructor(private router: Router,private loginservice: AuthenticationService, private apiService: ApiService) {}

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.model.user_id, this.model.password)
    ) {
      this.router.navigate([''])
      this.model.invalidLogin = false
      alert("login successufull");
    } else{
      this.model.invalidLogin = true
      alert("login Unsuccessufull");
      location.reload();
    }
  }

  onSubmitLogin(): void{
    //user: Users;
    this.apiService.loginUser(this.model.user_id).subscribe(
      response => {
        //alert("success");
        //console.log(response);
        this.checkLogin();
      },
      error =>{
        alert("error occured");
      }
    );    
  } 
}

export interface LoginViewModel{
  user_id: string,
  password: string,
  rememberme: string,
  invalidLogin: any
}
