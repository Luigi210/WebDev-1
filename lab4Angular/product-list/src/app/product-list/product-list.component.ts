import {Component, Input, OnInit} from '@angular/core';

import { products } from '../products';
import {ActivatedRoute} from "@angular/router";
import {categories} from "../category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  numberOfLikes: number = 0;
  category: any;
  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryNameFromRoute = Number(routeParams.get('productId'));

    // Find the category that correspond with the id provided in route.
    this.category = categories.find(category => category.id === categoryNameFromRoute);
  }
  products = products;


  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  likeProduct(index: number){
    products[index - 1].likes++;

  }

   remove(index: number){
     products.splice(index - 1, 1, { })
   }

}
