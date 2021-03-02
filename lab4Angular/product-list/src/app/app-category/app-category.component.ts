import { Component, OnInit } from '@angular/core';
import {categories} from "../category";
import {products} from "../products";

@Component({
  selector: 'app-app-category',
  templateUrl: './app-category.component.html',
  styleUrls: ['./app-category.component.css']
})
export class AppCategoryComponent implements OnInit {
  product: any;

  constructor() { }

  ngOnInit(): void {
  }

  categories = categories;

}
