import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: 'Best' | 'New' | 'Premium';
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}
