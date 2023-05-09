import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { User } from '../models/User';
import { UserService } from './user.serice';
import { CartResponse } from '../models/CartResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  private url = 'https://trade-box.azurewebsites.net/cart';
  userId? : string;

  constructor(private http: HttpClient, private userService: UserService) 
  { 
    this.userId = userService.getCurrentUser()?.id;
  }

  public addToCart(cart: Cart)
  {
    const body = JSON.stringify(cart);
    const headers = { 'Content-Type': 'application/json', 'accept': 'text/plain' };
    console.log(body);

    // @ts-ignore
    return this.http.post<Cart>(`${this.url}`, body, { headers: headers });
  } 

  public getCart(): Observable<CartResponse[]>
  {
    return this.http.get<CartResponse[]>(this.url + '/' + this.userId);
  }

  public getHistory(): Observable<CartResponse[]>
  {
    return this.http.get<CartResponse[]>(this.url + '/history/' + this.userId);
  }

  public buyAll()
  {
    const body = { title: 'Angular PUT Request Example' };
    console.log(this.userId)
    return this.http.put<any>(this.url + '/' + this.userId, body);
  }

  public delete(cartId: string)
  {
    //const body = { title: 'Angular PUT Request Example' };
    return this.http.delete(this.url + '/' + cartId);
  }




}
