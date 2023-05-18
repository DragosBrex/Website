import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartResponse } from 'src/app/models/CartResponse';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import {delay, Subscription} from 'rxjs';
import { NgFor } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {loadStripe} from "@stripe/stripe-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 carts: CartResponse[] = [];
 cartHistory: CartResponse[] = [];
 pHistory: Product[] = [];
 product: Product | undefined;
 show: boolean = true;
 displayedColumns: Array<string> = [
   'product',
   'name',
   'price',
   'quantity',
   'total',
   'action'
 ]

  cartSubscription: Subscription | undefined;
 constructor(private router: Router, private cartService: CartService, private http: HttpClient){}

toggleShow()
{
  this.show = !this.show;
}

deleteProduct(cart: CartResponse)
{
  this.cartService.delete(cart.id!).pipe().subscribe(
    (data) => {
      console.log(`Product deleted successfully id=${data}`);
      // remove the deleted product from the products list
      const index = this.carts.indexOf(cart);
      this.carts.splice(index, 1);
      this.ngOnInit();
      window.location.reload();
      //this.router.navigate(['home']).then(() => {window.location.reload();})
    },
    (error) => {
      console.error('Error deleting product', error);
      window.location.reload();
    }
  );
}

placeOrder()
{
  this.cartService.buyAll().subscribe(
    (data) =>
    {
      console.log("Order submitted successfully!");
      //window.location.reload();
    },
    (error) =>{
      console.error('Error submiting the order', error);
      window.location.reload();
    }

  );

}

 ngOnInit()
 {
  this.cartService
  .getCart()
  .subscribe((result: CartResponse[]) => (this.carts = result));

  this.cartService
  .getHistory()
  .subscribe((result: CartResponse[]) => (this.cartHistory = result));
 }

  getTotal(items: CartResponse[]): number {

   let total = 0;
   for (var i of items)
   {
      // @ts-ignore
     total += i.product?.price;
   }

   return total;
  }

  /*
  onAddQuantity(item: CartResponse): void {
    this.cartService.addToCart(item);
  }
  */


  onRemoveFromCart(item: CartResponse): void {
    this.deleteProduct(item);
  }

  /*
  onRemoveQuantity(item: CartResponse): void {
    this.cartService.removeQuantity(item);
  }
  */

  onClearCart(): void {
    this.carts.forEach(c=>this.deleteProduct(c));
  }

  onCheckout():void {

  }
}
