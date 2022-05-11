import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {PublicityComponent} from './publicity/publicity.component';
import {MainComponent} from './main/main.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {AddAppointmentComponent} from './add-appointment/add-appointment.component';
import {UpdateAppointmentComponent} from './update-appointment/update-appointment.component';
import {ReclamationComponent} from './reclamation/reclamation.component';
import {AddreclamationComponent} from './addreclamation/addreclamation.component';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
    // { path: 'home',             component: HomeComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'register',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    // { path: 'login',          component: LoginComponent },
    // { path: '', redirectTo: 'home', pathMatch: 'full' }
    {path: '', component: LoginComponent},
    // {path: '**', component: LoginComponent}
    // { path: '**', redirectTo: '/', pathMatch: 'full' } ,
    {
        path: 'main',
        component: MainComponent ,
        children: [
            { path: 'home',             component: HomeComponent },
            { path: 'user-profile',     component: ProfileComponent },
            { path: 'register',           component: SignupComponent },
            { path: 'landing',          component: LandingComponent },
            // { path: 'login',          component: LoginComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {path: 'publicity', component: PublicityComponent},
             {path: 'appointments', component: AppointmentComponent},
            {path: 'addappointment', component: AddAppointmentComponent},
             {path: 'reclamation', component: ReclamationComponent},
            {path: 'addreclamation', component: AddreclamationComponent},
            {path: 'calendar', component: CalendarComponent},
            {path: 'update-appointment/:id', component: UpdateAppointmentComponent}

        ]
}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
