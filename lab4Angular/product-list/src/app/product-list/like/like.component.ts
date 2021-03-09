import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {products} from "../../products";


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() product: any;
  @Output() like = new EventEmitter();

  constructor() { }
  products = products;
  ngOnInit(): void {
  }

}
