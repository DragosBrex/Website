import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private url = 'https://trade-box.azurewebsites.net/users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
