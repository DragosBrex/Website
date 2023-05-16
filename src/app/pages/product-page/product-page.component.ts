import {Component, Input, OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import {UserService} from "../../services/user.serice";


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
  @Input() sort  = "asc";
  @Input() search  = '';

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

  onSearchChange(search : string){
    console.log(search);
    this.search = search;

    this.service
      .getPostsBySearch(this.search, this.sort)
      .subscribe((result: Product[]) => {
        this.products = result;
      });

  }

  onSortChange($event: string) {
    this.sort = $event;

    this.service
      .getPostsBySearch(this.search, this.sort)
      .subscribe((result: Product[]) => {
        this.products = result;
      });
  }
}
