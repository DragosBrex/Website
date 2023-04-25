import { Component , OnInit} from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ProductRequest } from '../models/productsRequest';
import {NgModel} from '@angular/forms';
import {SellerProductsService} from "../services/seller-product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})



export class AddProductComponent implements OnInit {

  constructor(private service : SellerProductsService){}

  product = new ProductRequest;

  add(product : ProductRequest )
  {
    return this.service.addPost(this.product).pipe().subscribe();
  }

  ngOnInit(): void {

  }

}
