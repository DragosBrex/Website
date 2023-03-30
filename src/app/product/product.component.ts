import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products;

  constructor(service: ProductsService)
  {   
    this.products = service.getProducts();
  }
}
