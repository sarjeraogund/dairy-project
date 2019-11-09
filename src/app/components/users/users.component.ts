import { Component, OnInit } from '@angular/core';
import { Users } from './model/Users';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[]=[];
  user_id: string = '';

  constructor(private apiService: ApiService) {
    this.getAllUsers();
  }

  ngOnInit() {
   //this.getAllUsers();
    //this.getOneUser();
  }

  public getOneUser() {
    this.apiService.getUser(this.user_id).subscribe(
      response =>{
        console.log(response);
        alert("success");
        //location.reload();
      },
      error =>{
        alert("error");
      }      
    )
  }

  public getAllUsers() {
    this.apiService.getAllUser().subscribe(
      response =>{
        this.users = response;
        console.log(response);
        //alert("success");
        //location.reload();
      },
      error =>{
        alert("error");
      }      
    )
  }

  deleteUser(user: Users){
    if(confirm("Do you want to delete User?")){
      this.apiService.deleteUser(user.user_id).subscribe(
        response =>{
          let indexOfUser = this.users.indexOf(user);
          this.users.splice(indexOfUser);
          alert("User entry deleted successfully");
        },
        error =>{
          alert("User entry can not deleted");
        }
      )
    }
  }
}
