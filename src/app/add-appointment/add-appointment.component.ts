import { Component, OnInit } from '@angular/core';
import {Appointment} from '../model/appointment';
import {AppointmentService} from '../service/appointment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
  }
  saveAppointment() {
    this.appointmentService.addAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointment();
    },
        error => console.log(error));

  }
  goToAppointment() {
    this.router.navigate(['appointments']);
  }
  onSubmit() {
     console.log(this.appointment);
     this.saveAppointment();
  }

}
