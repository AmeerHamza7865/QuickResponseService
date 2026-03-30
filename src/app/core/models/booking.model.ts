export interface User {
  id: number;
  userName: string;
  email: string;
  fullName?: string;
}

export interface Booking {
  id: number;
  serviceId: number;
  customerName: string;
  customerEmail: string;
  bookingDate: string;
  status: string; // Pending, Confirmed, Completed, Cancelled
  service?: any;
}
