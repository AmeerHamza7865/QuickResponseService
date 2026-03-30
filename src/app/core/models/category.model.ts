export interface ServiceCategory {
  id: number;
  name: string;
  description: string;
  iconUrl: string;
  services?: Service[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  serviceType: string;
  categoryId: number;
  category?: ServiceCategory;
}
