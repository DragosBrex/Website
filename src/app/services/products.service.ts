import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable ,firstValueFrom,throwError} from 'rxjs';
import { Product } from '../models/product';
import { ProductRequest } from '../models/productsRequest';
import { catchError, retry } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

@Injectable()
export class ProductsService 
{

  private url = 'https://trade-box.azurewebsites.net/products';

  constructor(private http: HttpClient) { }

  public getPosts() : Observable<Product[]>
  {

    return this.http.get<Product[]>(this.url);

  }

  public addPost(product: ProductRequest) : void
  {      
    const body=JSON.stringify(product);  
    const headers = { 'Content-Type': 'application/json' , 'accept' : 'text/plain' } ;
    console.log(body);

    this.http.post<Product>(this.url + '?sellerId=' +'2652c816-a277-465f-8410-cb6b6dca0d9c', body, {'headers' : headers}).pipe().subscribe();
  }

}