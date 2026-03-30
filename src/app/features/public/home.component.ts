import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ServiceCategory } from '../../core/models/category.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, AsyncPipe],
  template: `
    <section class="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div class="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Trusted by 5,000+ Customers</span> 
                    <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Professional Home Services <br/><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">At Your Doorstep</span></h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Quick Response Service provides expert AC repair, maintenance, and home care solutions with guaranteed satisfaction and transparent pricing.</p>
                <div class="flex flex-col sm:flex-row gap-4 mb-8">
                  <a routerLink="/services" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-colors">
                      Book a Service
                      <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                  <a routerLink="/contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-colors">
                      How it Works
                  </a>
                </div>
                <div class="flex items-center gap-6 mt-8 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <div class="flex items-center gap-2"><span class="text-yellow-400 text-lg">⭐</span> 4.9/5 Rating</div>
                    <div class="flex items-center gap-2"><span class="text-blue-500 text-lg">⏱️</span> 60-Min Response</div>
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
                <img src="images/hero_technician_service.png" alt="Professional Service" class="rounded-2xl shadow-xl object-cover h-[500px] w-full border border-gray-100 dark:border-gray-800">
                <div class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 dark:border-gray-700 z-10 hover:-translate-y-1 transition-transform">
                    <div class="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <strong class="block text-gray-900 dark:text-white text-sm">Certified Experts</strong>
                        <span class="text-xs text-gray-500 dark:text-gray-400">Verified Technicians</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gray-50 dark:bg-gray-800 py-16">
      <div class="max-w-screen-xl px-4 mx-auto">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <h2 class="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Most Popular Services</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">High-quality maintenance services delivered by our expert team.</p>
          </div>
          <a routerLink="/services" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700 transition-colors">
            View All Services
            <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <div *ngFor="let cat of (categories$ | async)" class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:bg-gray-900 dark:border-gray-700 flex flex-col cursor-pointer overflow-hidden group w-full mx-auto" [routerLink]="['/services']" [queryParams]="{category: cat.id}">
              <div class="relative h-56 overflow-hidden">
                 <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" [src]="getCategoryThumb(cat.name)" alt="{{cat.name}}" />
                 <div class="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">Instant Booking</div>
              </div>
              <div class="p-6 flex-1 flex flex-col">
                  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{cat.name}}</h3>
                  <p class="mb-6 font-normal text-gray-600 dark:text-gray-400 flex-1 line-clamp-2">{{cat.description}}</p>
                  <div class="inline-flex items-center font-medium text-blue-700 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 mt-auto group-hover:underline">
                      View Services
                      <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div class="max-w-screen-xl px-4 mx-auto text-center">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">How It Works</h2>
        <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-lg dark:text-gray-400 max-w-2xl mx-auto">Get your home services done in 3 simple and transparent steps.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div class="absolute -right-6 -top-6 text-[150px] font-black text-blue-600/5 dark:text-white/5 select-none leading-none group-hover:scale-110 transition-transform">1</div>
            <div class="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-blue-100 lg:h-20 lg:w-20 dark:bg-blue-900/40 mx-auto relative z-10 ring-4 ring-white dark:ring-gray-800">
                <svg class="w-8 h-8 text-blue-600 lg:w-10 lg:h-10 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white relative z-10">Choose Service</h3>
            <p class="text-gray-500 dark:text-gray-400 relative z-10 font-medium">Select the service you need from our extensive catalog.</p>
          </div>
          <div class="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div class="absolute -right-6 -top-6 text-[150px] font-black text-blue-600/5 dark:text-white/5 select-none leading-none group-hover:scale-110 transition-transform">2</div>
            <div class="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-blue-100 lg:h-20 lg:w-20 dark:bg-blue-900/40 mx-auto relative z-10 ring-4 ring-white dark:ring-gray-800">
                <svg class="w-8 h-8 text-blue-600 lg:w-10 lg:h-10 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white relative z-10">Pick a Schedule</h3>
            <p class="text-gray-500 dark:text-gray-400 relative z-10 font-medium">Choose a date and time that works best for you.</p>
          </div>
          <div class="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div class="absolute -right-6 -top-6 text-[150px] font-black text-blue-600/5 dark:text-white/5 select-none leading-none group-hover:scale-110 transition-transform">3</div>
            <div class="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-blue-100 lg:h-20 lg:w-20 dark:bg-blue-900/40 mx-auto relative z-10 ring-4 ring-white dark:ring-gray-800">
                <svg class="w-8 h-8 text-blue-600 lg:w-10 lg:h-10 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white relative z-10">Get It Done</h3>
            <p class="text-gray-500 dark:text-gray-400 relative z-10 font-medium">Our expert arrives and fixes your problem with a guarantee.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  categories$!: Observable<ServiceCategory[]>;

  private thumbs: any = {
    'ac': 'images/ac_service.png',
    'electric': 'images/electrician_service.png',
    'clean': 'images/cleaning_service.png',
    'maintenance': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    'water': 'https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=800',
    'paint': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    'plumb': 'https://images.unsplash.com/photo-1585703058231-5367cc36a919?auto=format&fit=crop&q=80&w=800'
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.categories$ = this.apiService.getCategories();
  }

  getCategoryThumb(name: string): string {
    const lowName = name.toLowerCase();
    for (const key in this.thumbs) {
      if (lowName.includes(key)) return this.thumbs[key];
    }
    return this.thumbs['maintenance'];
  }
}
