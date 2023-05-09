import {Injectable, Input, OnInit} from '@angular/core';
import { User } from "../models/User";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(private router: Router){}

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

    this.router.navigate(['home']).then(() => {window.location.reload();});
  }

  getRole(role : string)
  {
    let roles : string[] = [];

    this.currentUser?.roles!.forEach(r => roles.push(<string>r.name))

    return roles.find(r=> r == role) == role;
  }

  ngOnInit(): void {

      let res = localStorage.getItem('currentUser');
      if(res != null)
      {
        this.currentUser = JSON.parse(res);
      }
    }
}
