export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating?: number;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  message: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}
