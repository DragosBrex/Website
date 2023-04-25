import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ProductRequest } from 'src/app/models/productsRequest';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})

export class SellerPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductsBySellerId('123').subscribe(products => {
      this.products = products;
    });
  }

  //delele product
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(
      (data) => {
        console.log('Product deleted successfully');
        // remove the deleted product from the products list
        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
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
