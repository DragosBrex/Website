import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product';
@Component({
  selector: 'app-product',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit
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
