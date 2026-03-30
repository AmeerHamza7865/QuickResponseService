import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, AsyncPipe, CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Service } from '../../core/models/category.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, AsyncPipe, RouterLink, CommonModule],
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  service$!: Observable<Service>;
  loading = false;
  success = false;
  error = '';
  serviceId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      bookingDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.serviceId = +this.route.snapshot.params['id'];
    this.service$ = this.apiService.getServices().pipe(
      map(services => services.find(s => s.id === this.serviceId)!)
    );
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.loading = true;
      const bookingData = {
        ...this.bookingForm.value,
        serviceId: this.serviceId,
        status: 'Pending'
      };
      
      this.apiService.createBooking(bookingData).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          setTimeout(() => this.router.navigate(['/services']), 3000);
        },
        error: () => {
          this.error = 'Failed to create booking. Please try again.';
          this.loading = false;
        }
      });
    }
  }
}
