import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpViewModel } from '../components/signup/signup.component';
import { Users } from '../components/users/model/Users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:8080/user";
  private SIGN_UP_URL = `${this.BASE_URL}\\insert`;
  private ALL_USERS_URL = `${this.BASE_URL}\\all`;
  constructor(private http: HttpClient) { }

  signUpUser(signup: SignUpViewModel): Observable<any>{
    return this.http.post(this.SIGN_UP_URL,signup);
  }

  getAllUser(): Observable<Users[]>{
    return this.http.get<Users[]>(this.ALL_USERS_URL);
  }
}
