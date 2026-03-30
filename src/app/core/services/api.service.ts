import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCategory, Service } from '../models/category.model';
import { Booking } from '../models/booking.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ServiceCategory[]> {
    return this.http.get<ServiceCategory[]>(`${this.apiUrl}/Categories`);
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/Services`);
  }

  getServicesByCategory(categoryId: number): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/Services/Category/${categoryId}`);
  }

  createBooking(booking: any): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/Bookings`, booking);
  }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/Bookings`);
  }

  addService(service: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Services`, service);
  }
}
