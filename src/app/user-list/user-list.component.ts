import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserItemComponent } from '../user-item/user-item.component';
import { UserService } from '../services/user.service';
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  providers:[UserService],
  selector: 'app-user-list',
  imports: [UserItemComponent, UserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent{
  users!:User[];
  selectedUser!:User;
  constructor(private service:UserService){
    this.users=this.service.getAllUsers();
    console.log(this.users);
  }
  itemClick(user:User):void{
    this.selectedUser=user;

  }
}
