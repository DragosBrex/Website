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

  //https://localhost:44384/auth/login?Email=fwe%40SDF.COM&Password=123
  public login(email: string, password: string): Boolean {

    let user = new User;
      this.getUser(email, password).pipe().subscribe((data) => {
      user = data;
    });

    if(user != null)
    {
      this.userService.setCurrentUser(user);
      return true;
    }

    return false;
  }

  public signup(user : UserRequest): Boolean
  {
    let res = this.addUser(user);
    if(res == null)
      return false;

    return true;
  }

  private addUser(user : UserRequest) : User
  {
    const body=JSON.stringify(user);
    const headers = { 'Content-Type': 'application/json' , 'accept' : 'text/plain' } ;
    console.log(body);

    let res : User = new User();

    this.http.post<UserRequest>(this.url + '/auth/register' , body, {'headers' : headers}).pipe().subscribe(
      (response) => {
        res = response;
        console.log(response);
        // Display a success message to the user
      },
      (error) => {
        console.error(error);
        // Display an error message to the user
      }
    );

    return res;
  }
  private getUser(email: string, password: string): Observable<User>
  {
    return this.http.get(this.url+'/auth/login?Email='+email+'&Password='+password);
  }

}
