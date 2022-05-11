import { Component, OnInit } from '@angular/core';
import {EventserviceService} from '../service/eventservice.service';
import {AppointmentService} from '../service/appointment.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events!: any[];

  options!: any;

  header: any;

  constructor(private eventService: AppointmentService) { }

  ngOnInit() {
    this.eventService.getAppointmentsList().subscribe(data => {
      console.log(data);
      this.events = data;
      this.options = {...this.options, ...{events: this.events}};

    });
    this.options = {
      initialDate : '2019-01-01',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true
    };
  }

}
