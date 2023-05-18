import {Component, Input, OnInit} from '@angular/core';
import {SellerProductsService} from "../../services/seller-product.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {ProductRequest} from "../../models/productsRequest";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() image!: string;
  @Input() quantity!: number;
  @Input() isNegotiable!: boolean;
  @Input() display!: boolean;
  constructor(private service : SellerProductsService,
              private router : Router,
              private location: Location){}

  onSubmit() {
    const newProduct = new ProductRequest()
    newProduct.name = this.name;
    newProduct.description = this.description;
    newProduct.isNegotiable = this.isNegotiable;
    newProduct.price = this.price;
    newProduct.quantity = this.quantity;
    newProduct.display = this.display;

    this.service.addPost(newProduct).subscribe((data) =>
    {
      alert('Product added successfully!');
      console.log(data);
      this.router.navigate(['myproducts']).then(() => {window.location.reload();});
    })

    this.ngOnInit();
  }
  ngOnInit(): void {
    this.name = '';
    this.description = '';
    this.isNegotiable = false;
    this.price = 0;
    this.quantity = 0;
    this.display = false;
  }

  cancel(): void {
    this.location.back();
  }

}
