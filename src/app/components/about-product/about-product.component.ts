import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';4
import { ProductsService } from 'src/app/services/products.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
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
  sellerid?:string;
  userid?:string;

  //@Input() cart?: Cart;

  constructor(private serviceP: ProductsService,
              private service: CartService,
              private route: ActivatedRoute,
              protected userService: UserService,
              private router: Router) {}

  protected readonly UserService = UserService;
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
      this.sellerid = result.seller.id;
      this.userid = this.userService.getCurrentUser()?.id;
    });

    console.log("Numele Produsului: " + this.product?.name)

  }

  RedirectToLogin()
  {
    this.router.navigate(['login']).then(() => {window.location.reload();});
  }
  EditProduct() {
    alert("edit product?");
  }
}
