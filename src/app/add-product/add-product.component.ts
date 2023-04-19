import { Component , OnInit} from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ProductRequest } from '../models/productsRequest';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})



export class AddProductComponent implements OnInit {

  constructor(private service:ProductsService){}

  product = new ProductRequest;

  add(product : ProductRequest ) : any
  {
    return this.service.addPost(this.product);
  }

  ngOnInit(): void {
    
  }

}
