import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product';
import { ProductRequest } from '../models/productsRequest';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://trade-box.azurewebsites.net/products';

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  public getPostsBySearch(search:string, sort:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}?Search=${search}&Direction=${sort}&Column=Price`);
  }

  public getPostsById(ProductId: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${ProductId}`);
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }


}
