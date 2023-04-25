import { Injectable, OnInit } from '@angular/core';
import { User } from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(){}

  private currentUser?: User;

  setCurrentUser(user: User) {

    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

    console.log(user);
  }

  getCurrentUser() {

    let res = localStorage.getItem('currentUser');
    if(res != null)
    {
      this.currentUser = JSON.parse(res);
    }

    return this.currentUser;
  }

  logout()
  {
    localStorage.removeItem('currentUser');
    this.currentUser = undefined;

    location.reload();
  }

  ngOnInit(): void {

      let res = localStorage.getItem('currentUser');
      if(res != null)
      {
        this.currentUser = JSON.parse(res);
      }
    }
}
