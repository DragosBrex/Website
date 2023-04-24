import { Component , OnInit} from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ProductRequest } from '../models/productsRequest';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent
{
  constructor(private service:ProductsService){}

  product = new ProductRequest;

  add(product : ProductRequest ) : any
  {
    return this.service.addPost(this.product);
  }

  ngOnInit(): void {
    
  }
}