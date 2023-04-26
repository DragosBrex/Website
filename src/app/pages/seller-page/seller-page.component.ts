import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductRequest } from 'src/app/models/productsRequest';
import {SellerProductsService} from "../../services/seller-product.service";
import {UserService} from "../../services/user.serice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})

export class SellerPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: SellerProductsService,
              private userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
    this.productService.getProductsBySellerId(this.userService.getCurrentUser()?.id).subscribe(products => {
      this.products = products;
    });
  }

  //delele product
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).pipe().subscribe(
      (data) => {
        console.log(`Product deleted successfully id=${data}`);
        // remove the deleted product from the products list
        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
        //this.router.navigate(['seller/page']).then(() => {window.location.reload();})
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    );
  }

  //edit
  editProduct(product: Product): void {
    const updatedProduct: ProductRequest = {
      name: product.name,
      description: product.description,
      isNegotiable: product.isNegotiable,
      price: product.price,
      quantity: product.quantity,
      display: false
    };

    // @ts-ignore
    this.productService.editProduct(product.id, updatedProduct).subscribe(() => {
      // Success
      console.log('Product updated successfully');
    }, (error: any) => {
      // Error
      console.error('Error updating product: ', error);
    });
  }


}
