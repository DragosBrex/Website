import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-description',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent
{

  @Input() name! : string;
  @Input() description! : string;
  @Input() price! : number;
  @Input() quantity! : number;

  constructor(private activeRoute:ActivatedRoute)
  {

  }


}
