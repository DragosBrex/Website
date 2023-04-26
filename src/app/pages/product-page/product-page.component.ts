import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import {UserService} from "../../services/user.serice";
import {User} from "../../models/User";
import {Role} from "../../models/Role";
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit
{
  products: Product[] = [];

  constructor(private service:ProductsService, private userService: UserService) {}

  ngOnInit()
  {
    this.service
    .getPosts()
    .subscribe((result: Product[]) => {
      this.products = result;
    });

  }
}
