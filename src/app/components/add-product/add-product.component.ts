import {Component, Input, OnInit} from '@angular/core';
import {SellerProductsService} from "../../services/seller-product.service";
import {Router} from "@angular/router";

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
  constructor(private service : SellerProductsService, private router : Router){}

  onSubmit() {
    const newProduct = {
      name: this.name,
      description: this.description,
      isNegotiable : this.isNegotiable,
      price: this.price,
      quantity: this.quantity,
      display : this.display
    };

    this.service.addPost(newProduct).subscribe((data) =>
    {
      alert('Product added successfully!');
      console.log(data);
      this.router.navigate(['seller/page']).then(() => {window.location.reload();});
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

}
