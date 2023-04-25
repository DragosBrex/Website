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

  public getPostsById(ProductId: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${ProductId}`);
  }

  public addPost(product: ProductRequest): Observable<Product> {
    const body = JSON.stringify(product);
    const headers = { 'Content-Type': 'application/json', 'accept': 'text/plain' };
    console.log(body);
    return this.http.post<Product>(`${this.url}?sellerId=2652c816-a277-465f-8410-cb6b6dca0d9c`, body, { headers: headers })
      .pipe(
        catchError((err) => {
          console.error('Error adding product', err);
          return throwError('Something went wrong while adding product.');
        })
      );
  }

  public getProductsBySellerId(sellerId: string): Observable<Product[]> {
    const url = `${this.url}?sellerId=${sellerId}`;
    return this.http.get<Product[]>(url);
  }

  public deleteProduct(productId: string): Observable<void> {
    const url = `${this.url}/${productId}`;
    return this.http.delete<void>(url);
  }

  public editProduct(productId: string, updatedProduct: ProductRequest): Observable<Product> {
    const url = `${this.url}/${productId}`;
    const headers = { 'Content-Type': 'application/json', 'accept': 'text/plain' };
    const body = JSON.stringify(updatedProduct);
    return this.http.put<Product>(url, body, { headers: headers }).pipe(
      catchError((err) => {
        console.error('Error updating product', err);
        return throwError('Something went wrong while updating product.');
      })
    );
  }
}
