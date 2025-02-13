import { Component, Input } from '@angular/core';
import { Patient } from '../models/patient.model';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-form',
  imports: [FormsModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css',
  providers:[PatientService]
})
export class PatientFormComponent {
  @Input() patient!:Patient;
  searchId:number=0;
  constructor(private http:PatientService){
    this.patient={id:0,fname:"",lname:"",dob:"",email:"",registered:false};

  }
  
  addPatient(){
    this.http.addPatient(this.patient);
    return false;

  }
  editPatient(){
    this.http.editPatient(this.patient);
    return false;

  }
  deletePatient(){
    this.http.deletePatient(this.patient);
    return false;

  }
  getPatientDetails(){
    this.http.getPatientDetailsHttp(this.searchId).subscribe(data=>{
      this.patient=(<Patient[]>data)[0];
      console.log(this.patient);

    });
    return false;
  }
  clearForm(){
    this.patient={id:0,fname:"",lname:"",dob:"",email:"",registered:false};
    return false;
  }


}
