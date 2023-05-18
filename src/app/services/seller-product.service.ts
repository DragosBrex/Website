import {UserService} from "./user.serice";
import {HttpClient} from "@angular/common/http";
import {ProductRequest} from "../models/productsRequest";
import {Observable, throwError} from "rxjs";
import {Product} from "../models/product";
import {User} from "../models/User";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class SellerProductsService
{
  getProductById(id: string) {
      throw new Error('Method not implemented.');
  }
  private url = 'https://trade-box.azurewebsites.net/products/seller';
  seller? : User;
  constructor(private userService : UserService, private http: HttpClient)
  {
    this.seller = userService.getCurrentUser();
  }
  public addPost(product: ProductRequest): Observable<Product> // create product with seller id
  {
    const body = JSON.stringify(product);
    const headers = { 'Content-Type': 'application/json', 'accept': 'text/plain' };
    console.log(body);

    // @ts-ignore
    return this.http.post<Product>(`${this.url}/${this.seller.id}`, body, { headers: headers });
  }

  public getProductsBySellerId(sellerId: string | undefined): Observable<Product[]> {
    const url = `${this.url}/${sellerId}`;
    return this.http.get<Product[]>(url);
  }

  public editProduct(productId: string, updatedProduct: ProductRequest): Observable<Product> {
    const url = `${this.url}/${productId}`;
    const headers = { 'Content-Type': 'application/json', 'accept': 'text/plain' };
    const body = JSON.stringify(updatedProduct);

    return this.http.patch<Product>(url, body, { headers: headers }).pipe();

  }

  public deleteProduct(productId: string)
  {
    const url = `${this.url}/${productId}`;
    return this.http.delete<string>(url).pipe();
  }
}
