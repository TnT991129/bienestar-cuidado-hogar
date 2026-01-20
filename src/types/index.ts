export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  specialties: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
  emergency: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}