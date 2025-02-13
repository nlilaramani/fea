import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Patient } from "../models/patient.model";
import { Observable } from "rxjs";

@Injectable()
export class PatientService{
    constructor(private http:HttpClient){

    } 

    getAllPatientsHttp():Object[]{
        let patients:Object[]=[];
        this.http.get('http://localhost:8090/patients').subscribe(data=>{
            console.log(data);
            var data1=<Array<any>>(data);
            data1.forEach(e=> {
                console.log(e["id"]);
                patients.push({"id":e["id"],"fname":e["fname"],"email":e["email"],"education":"","active":true});    
            });
        })
        console.log(patients);
        return patients;
    }

    getPatientDetailsHttp(patientId:number):Observable<Object>{
        let patient!:Patient;
        return this.http.get('http://localhost:8090/patients/'+patientId);
        /*this.http.get('http://localhost:8090/patients/'+patientId).subscribe(data=>{
            console.log(data);
            var data1=<Array<any>>(data);
            data1.forEach(e=> {
                console.log(e["id"]);
            });
            //patient=<Patient>(data1[0]);
        })
        console.log(patient);
        return patient;*/
    }


    addPatient(p:Patient):Object{
        let result:Object={};
        console.log(p);
        this.http.post("http://localhost:8090/patients",p).subscribe(data=>{
            console.log(data);
            result=data;
        });
        return result;
    }

    
    editPatient(p:Patient):Object{
        let result:Object={};
        console.log(p);
        this.http.put("http://localhost:8090/patients/"+p.id,p).subscribe(data=>{
            console.log(data);
            result=data;
        });
        return result;
    }


    
    deletePatient(p:Patient):Object{
        let result:Object={};
        console.log(p);
        this.http.delete("http://localhost:8090/patients/"+p.id).subscribe(data=>{
            console.log(data);
            result=data;
        });
        return result;
    }
}