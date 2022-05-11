import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { PublicityComponent } from './publicity/publicity.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { CalendarComponent } from './calendar/calendar.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PublicityComponent,
    MainComponent,
    AppointmentComponent,
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    ReclamationComponent,
    AddreclamationComponent,
    CalendarComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
      HttpClientModule,
    FullCalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
