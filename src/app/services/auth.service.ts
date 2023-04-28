import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {UserService} from "./user.serice";
import {UserRequest} from "../models/UserRequest";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;

  private url = 'https://trade-box.azurewebsites.net';
  constructor(private http: HttpClient)
  {
    // @ts-ignore
    this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable();
  }

  public get currentUserValue(): User {
    // @ts-ignore
    return this.userSubject.value;
  }
  public login(email: string, password: string): Observable<User> {

    return this.http.get<User>(`${this.url}/auth/login?Email=${email}&Password=${password}`)
      .pipe(map (u => {
        localStorage.setItem('currentUser', JSON.stringify(u));
        console.log(u);
        return u;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.userSubject.next(null);
  }

  public signup(user : UserRequest): Observable<User>
  {
    const body=JSON.stringify(user);
    const headers = { 'Content-Type': 'application/json' , 'accept' : 'text/plain' } ;
    console.log(body);

    return this.http.post<UserRequest>(this.url + '/auth/register' , body, {'headers' : headers})
      .pipe(map (u => {
      localStorage.setItem('currentUser', JSON.stringify(u));
      console.log(u);
      return u;
    }));
  }

}
