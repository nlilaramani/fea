import { Component, Host, HostBinding } from '@angular/core';
import { User } from '../models/user.model';
import { Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-item',
  imports: [NgStyle,NgClass],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
  host:{
    'class':'ui row inverted border-1'
  }
})
export class UserItemComponent {
  @Input() user!:User;
  getSize():boolean{
    if(this.user?.education=="B"){
      console.log("Returning blue")
      return true;
    }
    else
      return false;
  }
}
