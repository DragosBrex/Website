import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {User} from "../models/User";
import {Ticket} from "../models/Ticket";

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private url = 'https://trade-box.azurewebsites.net';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users');
  }

  public getTickets()
  {
    return this.http.get<Ticket[]>(this.url + '/tickets')
  }
}
