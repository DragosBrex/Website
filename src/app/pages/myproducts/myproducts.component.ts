import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ProductRequest } from '../../models/productsRequest';
import { NgModel } from '@angular/forms';
import {SellerProductsService} from "../../services/seller-product.service";
import { UserService } from '../../services/user.serice';
import { User } from '../../models/User';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})

export class MyproductsComponent
{
  products: Product[] = [];
  user? : User;

  product = new ProductRequest;

  constructor(private service:SellerProductsService,
              private userService: UserService,
              private router: Router) {}

  add(product : ProductRequest ) : any
  {
    return this.service.addPost(this.product);
  }

  ngOnInit()
  {
    this.user = this.userService.getCurrentUser();

    this.service
    .getProductsBySellerId(this.user?.id!)
      .subscribe((result: Product[]) => (this.products = result));
  }

  deleteProduct(product: Product): void {
    const confirmDelete = confirm("Sigur doriti sa stergeti produsul?");
    if (confirmDelete) {
      this.products = this.products.filter(p => p !== product);

      this.service.deleteProduct(product.id)
        .subscribe(
          () => console.log(`Product ${product.id} deleted`)
        );
    }
  }

  hover= true;
  onAddProduct() {
    this.router.navigate(['/add-product']);

   /*clicked = false;
   this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1000);*/
  }

}

