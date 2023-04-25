import { Injectable, OnInit } from '@angular/core';
import { User } from "../models/User";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(private router: Router){}

  private currentUser?: User;
  private role?: string;

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

    this.router.navigate(['home']).then(() => {window.location.reload();});
  }

  getRole()
  {
    return this.role = this.currentUser?.roles![0].name;
  }

  ngOnInit(): void {

      let res = localStorage.getItem('currentUser');
      if(res != null)
      {
        this.currentUser = JSON.parse(res);
      }
    }
}
