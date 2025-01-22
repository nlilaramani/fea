import { User } from "../models/user.model";
export class UserService{
    getAllUsers():User[]{
        return [
            {"id":1,"name":"Paul Maccarthy","email":"pm@gmail.com", "active":true,"education":"B"},
            {"id":2,"name":"Bob Rahway","email":"br@gmail.com","active":false,"education":"HD"},
            {"id":3,"name":"Robert Illiffe","email":"ri@gmail.com","active":true,"education":"M"},
            {"id":4,"name":"Priya Patel","email":"ppatel@gmail.com","active":true,"education":"P"}
          ];
    }
}