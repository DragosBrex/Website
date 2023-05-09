import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';4
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { UserService } from 'src/app/services/user.serice';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent implements OnInit
{
  product: Product | undefined;
  id?: string;

  //@Input() cart?: Cart;

  constructor(private serviceP: ProductsService,private service: CartService, private route: ActivatedRoute, private userService: UserService) {}

  onSubmit()
  {
    const cart = new Cart;
    cart.productId = this.id;
    cart.userId = this.userService.getCurrentUser()?.id;

    //this.cart!.userId = this.userService.getCurrentUser()!.id;
    //this.cart!.productId = this.id;

    this.service.addToCart(cart!).subscribe((data) =>
    {
      alert('Product addded to cart succesfully!');
      console.log(data);
    })
  }

  ngOnInit()
  {
    this.route.params.subscribe(params=>{this.id = params['productId'];});

    console.log("Id-ul produsului: " + this.id);

    this.serviceP
    .getPostsById(this.id!)
    .subscribe((result: Product) => {
      this.product = result;
    });

    console.log("Numele PRodusului: " + this.product?.name)

  }

  onSubmit() {
    // handle form submission
  }


}
