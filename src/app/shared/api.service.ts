import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpViewModel } from '../components/signup/signup.component';
import { Users } from '../components/users/model/Users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:8080/MilkDairyProducts-0.0.1-SNAPSHOT/user";
  private SIGN_UP_URL = `${this.BASE_URL}\\insert`;
  private ALL_USERS_URL = `${this.BASE_URL}\\all\\`;
  private DELETE_USER_URL = `${this.BASE_URL}\\delete\\`;

  constructor(private http: HttpClient) { }

  signUpUser(signup: SignUpViewModel): Observable<any>{
    return this.http.post(this.SIGN_UP_URL,signup);
  }

  updateUser(user_id: String, value: any): Observable<Object>{
    return this.http.put(this.DELETE_USER_URL+user_id, value);
  }

  loginUser(user_id: string): Observable<Users[]>{
    return this.http.get<Users[]>(this.ALL_USERS_URL+user_id);
  }

  getAllUser(): Observable<Users[]>{
    return this.http.get<Users[]>(this.ALL_USERS_URL);
  }

  getUser(user_id: string): Observable<Object>{
    return this.http.get(this.ALL_USERS_URL+user_id);
  }

  deleteUser(user_id: String): Observable<any>{
    return this.http.delete(this.DELETE_USER_URL+user_id);
  }

  
}
