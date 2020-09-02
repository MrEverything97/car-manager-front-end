import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trip} from '../interface/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private readonly API_TRIP = 'http://localhost:8080/trip/';
  constructor(private httpClient: HttpClient) { }
  showTripList(): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(`${this.API_TRIP}/list`);
  }
  createTrip(trip: Trip): Observable<Trip>{
    return this.httpClient.post<Trip>(`${this.API_TRIP}/create`, trip);
  }
  getTripById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_TRIP}/${id}`);
  }
  updateTrip(trip: Trip): Observable<Trip> {
    return this.httpClient.put<Trip>(`${this.API_TRIP}/update/${trip.id}`, trip);
  }
  deleteTripByID(id: number): Observable<Trip> {
    return this.httpClient.delete<Trip>(`${this.API_TRIP}/delete/` + `${id}`);
  }
}
