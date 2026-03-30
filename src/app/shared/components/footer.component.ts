import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink],
    template: `
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div class="mx-auto w-full max-w-screen-xl px-4">
        <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2">
            <div>
                <a routerLink="/" class="flex items-center mb-6">
                    <span class="text-xl sm:text-2xl font-bold whitespace-nowrap text-blue-700 dark:text-blue-500">
                      QUICK <span class="text-gray-900 dark:text-white">RESPONSE</span> <span class="text-green-600 dark:text-white"> SERVICE</span>
                    </span>
                </a>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
                    Professional home maintenance and repair services at your doorstep. Fast, reliable, and affordable.
                </p>
                <div class="flex mt-4 space-x-5 sm:justify-start sm:mt-0">
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <span class="sr-only">Facebook page</span>
                        <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600">FB</div>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <span class="sr-only">Twitter page</span>
                        <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold hover:bg-blue-400 hover:text-white dark:hover:bg-blue-400">TW</div>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <span class="sr-only">Instagram page</span>
                        <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600">IG</div>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <span class="sr-only">LinkedIn page</span>
                        <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700">LN</div>
                    </a>
                </div>
            </div>
            
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">AC Repair</a></li>
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Electrical</a></li>
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Plumbing</a></li>
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Cleaning</a></li>
                </ul>
            </div>
            
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About Us</a></li>
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Careers</a></li>
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Contact</a></li>
                    <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Terms</a></li>
                </ul>
            </div>
            
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                    <li class="flex items-start">
                        <span class="mr-3 text-lg">📍</span>
                        <span>Office 123, Service Building, Lahore, Pakistan</span>
                    </li>
                    <li class="flex items-start">
                        <span class="mr-3 text-lg">📞</span>
                        <a href="tel:+923141983506" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">+92 3141983506</a>
                    </li>
                    <li class="flex items-start">
                        <span class="mr-3 text-lg">✉️</span>
                        <a href="mailto:info@quickresponse.com" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">info&#64;quickresponse.com</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <div class="sm:flex sm:items-center sm:justify-between px-4">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2026 <a routerLink="/" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500 inline-block font-semibold">QUICK RESPONSE SERVICE™</a>. All rights reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-sm text-gray-500 dark:text-gray-400">
                <a href="#" class="hover:text-gray-900 dark:hover:text-white font-medium hover:underline">Privacy Policy</a>
                <a href="#" class="hover:text-gray-900 dark:hover:text-white font-medium hover:underline">Service Terms</a>
            </div>
        </div>
      </div>
    </footer>
  `,
    styles: []
})
export class FooterComponent { }
