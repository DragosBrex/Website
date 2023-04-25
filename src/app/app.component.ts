import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { UserService } from "./services/user.serice";
import { User } from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges
{
  title = 'magazin';
  @Input() user? : User;
  constructor(public userService : UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  ngOnChanges(changes: User) {
    this.user = changes
  }
}
