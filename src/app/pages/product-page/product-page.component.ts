import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product';
import {UserService} from "../../services/user.serice";
import {User} from "../../models/User";
@Component({
  selector: 'app-product',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit
{
  products: Product[] = [];
  user? : User;
  constructor(private service:ProductsService, private userService: UserService) {}

  ngOnInit()
  {
    this.service
    .getPosts()
    .subscribe((result: Product[]) => (this.products = result));

    this.user = this.userService.getCurrentUser();
  }
}
