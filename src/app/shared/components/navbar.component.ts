import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  template: `
    <nav class="bg-white border-gray-200 shadow-sm dark:bg-gray-900 sticky top-0 z-50">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a routerLink="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-xl sm:text-2xl font-bold whitespace-nowrap text-blue-700 dark:text-blue-500">
              QUICK <span class="text-gray-900 dark:text-white">RESPONSE</span> <span class="text-green-600 dark:text-white"> SERVICE </span>
            </span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
            <li>
              <a routerLink="/" routerLinkActive="!text-blue-700 dark:!text-blue-500" [routerLinkActiveOptions]="{exact: true}" class="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors">Home</a>
            </li>
            <li>
              <a routerLink="/services" routerLinkActive="!text-blue-700 dark:!text-blue-500" class="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors">Services</a>
            </li>
            <li>
              <a routerLink="/about" routerLinkActive="!text-blue-700 dark:!text-blue-500" class="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors">About Us</a>
            </li>
            <li>
              <a routerLink="/contact" routerLinkActive="!text-blue-700 dark:!text-blue-500" class="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors">Contact</a>
            </li>
            <li *ngIf="authService.isLoggedIn()">
              <a routerLink="/admin" routerLinkActive="!text-blue-700 dark:!text-blue-500" class="block py-2 px-3 text-gray-900 rounded-md font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors">Dashboard</a>
            </li>
            <li class="mt-4 md:mt-0 flex gap-4 items-center">
                <a routerLink="/login" *ngIf="!authService.isLoggedIn()" class="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white font-medium text-sm transition-colors">Admin Login</a>
                <button *ngIf="authService.isLoggedIn()" (click)="logout()" class="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 font-medium text-sm transition-colors cursor-pointer">Logout</button>
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors" routerLink="/services">Book Now</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
