import { Service } from '@angular/core';
import { Product } from '../models/product';

@Service()
export class ProductService {
  products: Product[] = [];

  constructor() {
    this.products = [
      new Product('Coffee', 5.9, 'assets/coffee.jpg', 'coffee'),
      new Product('Rainbow Shake', 7.2, 'assets/rainbow.jpg', 'shake'),
      new Product('Taco', 4.5, 'assets/taco.jpg', 'taco'),
      new Product('Sandwich', 6.5, 'assets/sandwich.jpg', 'sandwich'),
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(item => item.id === id);
  }

  delete(p: Product) {
    const index = this.products.findIndex(item => item.id == p.id);
    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
