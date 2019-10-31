import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  model:ContactViewModel = {
    name:'',
    email:'',
    subject:'',
    message:''
  }
  constructor() { }

  ngOnInit() {
  }

}

export interface ContactViewModel{
  name:string;
  email:string;
  subject:string;
  message:string;
}