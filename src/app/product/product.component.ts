import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  products: Product[] = [];

  constructor(private service:ProductsService) {}

  ngOnInit() 
  {
    this.service
    .getPosts()
    .subscribe((result: Product[]) => (this.products = result));
  }
}
