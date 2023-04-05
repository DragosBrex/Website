import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({

  providedIn: 'root'

})

export class ProductsService 
{

  private url = 'https://localhost:44384/products';

  constructor(private http: HttpClient) { }

  public getPosts() : Observable<Product[]>
  {

    return this.http.get<Product[]>(this.url);

  }

  

}