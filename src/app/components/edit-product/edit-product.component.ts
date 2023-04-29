import {Component, Input, OnInit} from '@angular/core';
import {SellerProductsService} from "../../services/seller-product.service";
import {Route, Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  @Input() id!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() image!: string;
  @Input() quantity!: number;
  @Input() isNegotiable!: boolean;
  @Input() display!: boolean;



  constructor(
    private service: SellerProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getProductById(this.id);
    });
  }

  getProductById(id: string) {
    // @ts-ignore
    this.service.getProductById(id).subscribe((data: any) => {
      this.name = data.name;
      this.description = data.description;
      this.price = data.price;
      this.image = data.image;
      this.quantity = data.quantity;
      this.isNegotiable = data.isNegotiable;
      this.display = data.display;
    });
  }

  onSubmit() {
    const updatedProduct = {
      id: this.id,
      name: this.name,
      description: this.description,
      isNegotiable : this.isNegotiable,
      price: this.price,
      quantity: this.quantity,
      display : this.display
    };

    this.service.editProduct(this.id, updatedProduct).subscribe((data) =>
    {
      alert('Product updated successfully!');
      console.log(data);
      this.router.navigate(['seller/page']).then(() => {window.location.reload();});
    });
  }
}
