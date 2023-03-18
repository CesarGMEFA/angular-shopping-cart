import { Category } from "./category.interface";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}
