import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent 
{
  @Input() product?: Product;

  constructor() {}

  ngOnInit(): void
  {
    
  }

  updateProduct(product: Product) {}

  deleteProduct(product: Product) {}

  createProduct(product: Product) {}
}
