import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-service.component.html'
})
export class AddServiceComponent implements OnInit {
  serviceForm: FormGroup;
  categories: any[] = [];
  loading = false;
  success = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      serviceType: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log('AddServiceComponent initialized');
    this.apiService.getCategories().subscribe({
      next: (data) => {
        console.log('Categories loaded:', data);
        this.categories = data;
        console.log(this.categories);
      },
      error: (err) => {
        console.error('Error loading categories:', err);
        this.error = 'Failed to load categories.';
      }
    });
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      this.loading = true;
      const serviceData = {
        ...this.serviceForm.value,
        categoryId: Number(this.serviceForm.value.categoryId),
        price: Number(this.serviceForm.value.price)
      };

      console.log('Submitting service data:', serviceData);

      this.apiService.addService(serviceData).subscribe({
        next: (res) => {
          console.log('Service added successfully:', res);
          this.success = true;
          this.loading = false;
          setTimeout(() => this.router.navigate(['/admin']), 2000);
        },
        error: (err) => {
          console.error('Error adding service:', err);
          this.error = 'Failed to add service. Please try again.';
          this.loading = false;
        }
      });
    } else {
      console.warn('Form is invalid:', this.serviceForm.value);
    }
  }
}
