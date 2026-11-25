import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/services/product-service';
import { Product } from '../shared/models/product';
import { positiveNumber } from '../shared/services/positiveNumber.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
  standalone: false,
})
export class EditProductPage implements OnInit {
  productId: string ="";
  product: Product | undefined;
  productImage: string | undefined;

  editProductForm: FormGroup;
  categories: string[] | undefined;
  submitted: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.productId = this.route.snapshot.params['id']; //practical 4: page navigation

    this.product = this.productService.getProductById(this.productId);
      this.productImage = this.product!.image;

    this.categories = ['Main', 'Beverage', 'Dessert'];
    this.editProductForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      price: new FormControl(0, [positiveNumber]),
      category: new FormControl('Food'),
      vegetarian: new FormControl(false)
    });
   }

  ngOnInit() {}

  update() {
    this.submitted = true;
    if (this.editProductForm.valid) {
    const prod = new Product(
      this.editProductForm.value.name,
      this.editProductForm.value.price,
      this.productImage || '',
      this.productId); //keep original ID
    prod.category = this.editProductForm.value.category;
    prod.vegetarian = this.editProductForm.value.vegetarian;
    this.productService.update(prod);
    this.router.navigate(['tabs/tab2']);
  }
  }
}
