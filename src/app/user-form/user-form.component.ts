import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Input } from '@angular/core';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
@Input() user!:User;
constructor(){
  this.user={"id":0, "name":"","email":"","active":true,"education":""};
}

onSubmit(f:NgForm):boolean{
  console.log(f);
  if(!f.valid){
    alert("Form has errors");
  }
  return false;
}

}
