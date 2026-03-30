import { Routes } from '@angular/router';
import { HomeComponent } from './features/public/home.component';
import { ServicesComponent } from './features/public/services.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', loadComponent: () => import('./features/public/about/about').then(m => m.About) },
  { path: 'login', loadComponent: () => import('./features/public/login.component').then(m => m.LoginComponent) },
  { path: 'book/:id', loadComponent: () => import('./features/public/booking.component').then(m => m.BookingComponent) },
  { path: 'contact', loadComponent: () => import('./features/public/contact.component').then(m => m.ContactComponent) },
  { 
    path: 'admin', 
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/admin/admin-dashboard.component').then(m => m.AdminDashboardComponent) 
  },
  {
    path: 'admin/add-service',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/admin/add-service.component').then(m => m.AddServiceComponent)
  }
];
