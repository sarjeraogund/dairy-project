import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:LoginViewModel = {
    user_id:'',
    password:'',
    rememberme:'',
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  onSubmitLogin(): void{
    let url="http://localhost:8080/users";
    this.http.post(url, this.model).subscribe(
      result => {
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
    
  }

}

export interface LoginViewModel{
  user_id: string,
  password: string,
  rememberme: string,
}
