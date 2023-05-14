import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import {UserService} from "../../services/user.serice";
import {User} from "../../models/User";
import {Role} from "../../models/Role";
import { NgFor } from '@angular/common';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-product',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit
{
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  category:string | undefined;
  products: Product[] = [];
  value: any;

  constructor(private service:ProductsService, private userService: UserService) {}

  ngOnInit()
  {
    this.service
    .getPosts()
    .subscribe((result: Product[]) => {
      this.products = result;
    });

  }

  onShowCategory(newCateg: string) {
    this.category = "newCateg";
  }

  onColumnsCountChange(colsNum:number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }
}
