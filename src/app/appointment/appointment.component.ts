import { Component, OnInit } from '@angular/core';
import {Appointment} from '../model/appointment';
import {AppointmentService} from '../service/appointment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[];
  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  private getAppointments() {
    this.appointmentService.getAppointmentsList().subscribe(data => {
      console.log(data);
      this.appointments = data;
    });
  }
 UpdateAppointment(id: number) {
this.router.navigate(['update-appointment' , id]);
  }

    deleteAppointment (id: number) {
      this.appointmentService.deleteAppointment(id).subscribe(data => {
        console.log(data);
        this.getAppointments();
      });

    }
}
