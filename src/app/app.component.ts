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
  @Input() roles : string[] = [];
  constructor(public userService : UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.user?.roles!.forEach(r => this.roles?.push(<string>r.name))
  }

  ngOnChanges(changes: User) {
    this.user = changes
  }
}
