import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class UserService{
    constructor(private http:HttpClient){

    } 

    getAllUsers():User[]{
        return [
            {"id":1,"name":"Paul Maccarthy","email":"pm@gmail.com", "active":true,"education":"B"},
            {"id":2,"name":"Bob Rahway","email":"br@gmail.com","active":false,"education":"HD"},
            {"id":3,"name":"Robert Illiffe","email":"ri@gmail.com","active":true,"education":"M"},
            {"id":4,"name":"Priya Patel","email":"ppatel@gmail.com","active":true,"education":"P"}
          ];

    }

    getAllUsersHttp():User[]{
        let users:User[]=[];
        this.http.get('http://localhost:8090/users').subscribe(data=>{
            console.log(data);
            var data1=<Array<any>>(data);
            data1.forEach(e=> {
                console.log(e["id"]);
                users.push({"id":e["id"],"name":e["name"],"email":e["email"],"education":"","active":true});    
            });
        })
        console.log(users);
        return users;
    }
    
}