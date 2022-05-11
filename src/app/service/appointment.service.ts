import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../model/appointment';
// @ts-ignore
import {Observable} from 'rxjs/dist/types';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseURL = 'http://localhost:8080/appointment';
private url = environment.webservice.baseUrl ;
  constructor(private httpClient: HttpClient) { }
  getAppointmentsList(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.url + 'appointment');

  }
addAppointment(appointment: Appointment): Observable<object> {
    return this.httpClient.post(this.url + 'appointment', appointment);

}
 deleteAppointment(id: number): Observable<Object> {

  return this.httpClient.delete(this.url + 'appointment/' + id);

}
}
