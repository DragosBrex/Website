import { Injectable } from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser?: User;

  setCurrentUser(user: User) {
    this.currentUser = user;

    console.log(this.currentUser.username + " " + this.currentUser.email);
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
