import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
// @ts-ignore
import {Observable} from 'rxjs/dist/types';
import {Reclamation} from '../model/reclamation';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private baseURL = 'http://localhost:8080/reclamation';
  private url = environment.webservice.baseUrl ;

  constructor(private httpClient: HttpClient) { }

  getReclamationsList(): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(this.url + 'reclamation');

  }
  addReclamation(reclamation: Reclamation): Observable<object> {
    return this.httpClient.post(this.url + 'reclamation', reclamation);

  }
  deleteReclamation(id: number): Observable<Object> {

    return this.httpClient.delete(this.url + 'reclamation/' + id);

  }
}
