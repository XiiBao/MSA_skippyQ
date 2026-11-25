import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: false,
})
export class AddProductPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.router.navigate(['tabs/tab2']);
  }

}
