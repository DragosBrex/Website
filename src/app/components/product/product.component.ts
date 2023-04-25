import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  productData: Product = new Product

  constructor(private activeRoute:ActivatedRoute, private service:ProductsService) {}

  ngOnInit()
  {
    let productId = this.activeRoute.snapshot.paramMap.get('productId')!;
    console.log(productId);


    this.service
    .getPostsById(productId)
    .subscribe((result: Product) => (this.productData = result));
  }

}
