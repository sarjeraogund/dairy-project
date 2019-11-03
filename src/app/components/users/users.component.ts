import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './model/Users';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[]=[];

  constructor(private apiService: ApiService) {
    this.apiService.getAllUser().subscribe(
      response =>{
        this.users = response;
        console.log(response);
        alert("success");
      },
      error =>{
        alert("error");
      }      
    )
   }

  ngOnInit() {
  }

  public getAllUsers() {
    this.apiService.getAllUser().subscribe(
      response =>{
        this.users = response;
        console.log(response);
        alert("success");
        //location.reload();
      },
      error =>{
        alert("error");
      }      
    )
  }
}
