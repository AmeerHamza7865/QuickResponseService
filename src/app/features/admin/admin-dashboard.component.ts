import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Booking } from '../../core/models/booking.model';
import { Observable } from 'rxjs';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  bookings$!: Observable<Booking[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.bookings$ = this.apiService.getBookings();
  }

  getCountByStatus(bookings: Booking[] | null, status: string): number {
    if (!bookings) return 0;
    return bookings.filter(b => b.status === status).length;
  }

  updateStatus(booking: Booking, event: any) {
    const newStatus = event.target.value;
    console.log(`Updating booking ${booking.id} to ${newStatus}`);
    booking.status = newStatus;
  }
}
