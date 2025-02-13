import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserListComponent } from './user-list/user-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
export const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UserListComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'patient',component:PatientFormComponent},
];