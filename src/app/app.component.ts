import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.serice";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'magazin';

  user? : User;
  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

}
