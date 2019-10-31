import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  response : any;
  user_id: string ="";

  model: SignUpViewModel = {
    user_id: '',
    password: '',
    full_name: '',
    dob: '',
    gender: '',
    email_id: '',
    mobile_no: ''
  }
  constructor(private http: HttpClient) { }
  ngOnInit() {  }

  onSubmitSignup(): void{
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

  public getUsers(){
    let url1="http://localhost:8080/users/"+this.user_id;
    this.http.get(url1).subscribe((response) => {
      this.response=response;
      console.log(this.response);
      alert("success");
    } )
  }
  

}
export interface SignUpViewModel{
  user_id: string,
  password: string,
  full_name: string,
  dob: string,
  gender: string,
  email_id: string,
  mobile_no: string
}