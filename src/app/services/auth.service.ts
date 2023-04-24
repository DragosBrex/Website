import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.serice";
import {UserRequest} from "../models/UserRequest";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://trade-box.azurewebsites.net';
  constructor(private http: HttpClient, private userService : UserService) { }

  public login(email: string, password: string): Observable<User> {
    return this.http.get(this.url+'/auth/login?Email='+email+'&Password='+password);
  }

  public signup(user : UserRequest)
  {
    const body=JSON.stringify(user);
    const headers = { 'Content-Type': 'application/json' , 'accept' : 'text/plain' } ;
    console.log(body);

    return this.http.post<UserRequest>(this.url + '/auth/register' , body, {'headers' : headers}).pipe().subscribe();

  }

}
