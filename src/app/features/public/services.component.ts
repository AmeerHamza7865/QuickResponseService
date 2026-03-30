import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf, CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Service, ServiceCategory } from '../../core/models/category.model';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, AsyncPipe, CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
  categories$!: Observable<ServiceCategory[]>;
  allServices$!: Observable<Service[]>;
  filteredServices$!: Observable<Service[]>;
  selectedCategoryId: number | null = null;

  private thumbs: any = {
    'ac': 'images/ac_service.png',
    'electric': 'images/electrician_service.png',
    'clean': 'images/cleaning_service.png',
    'repair': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    'install': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    'gas': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    'water': 'https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=800',
    'maintenance': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.categories$ = this.apiService.getCategories();
    this.allServices$ = this.apiService.getServices();

    this.filteredServices$ = combineLatest([
      this.allServices$,
      this.route.queryParams
    ]).pipe(
      map(([services, params]) => {
        this.selectedCategoryId = params['category'] ? +params['category'] : null;
        if (!this.selectedCategoryId) return services;
        return services.filter(s => s.categoryId === this.selectedCategoryId);
      })
    );
  }

  getServiceThumb(service: any): string {
    const combined = (service.name + ' ' + service.serviceType).toLowerCase();

    // Check specific keywords first for variety
    if (combined.includes('gas')) return this.thumbs['gas'];
    if (combined.includes('install')) return this.thumbs['install'];
    if (combined.includes('repair')) return this.thumbs['repair'];

    // Then check category keywords
    for (const key in this.thumbs) {
      if (combined.includes(key)) return this.thumbs[key];
    }

    return this.thumbs['maintenance'];
  }

  selectCategory(id: number | null) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: id || null }
    });
  }
}
