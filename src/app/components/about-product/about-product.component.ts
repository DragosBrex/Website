import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';4
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent
{

  product: Product | undefined;
  id?: string;

  constructor(private service: ProductsService, private route: ActivatedRoute) {}

  ngOnInit()
  {
    this.route.params.subscribe(params=>{this.id = params['productId'];})

    this.service
    .getPostsById(this.id!)
    .subscribe((result: Product) => {
      this.product = result;
    });

  }

}
