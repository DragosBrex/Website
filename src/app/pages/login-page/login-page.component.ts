import {Component, Input} from '@angular/core';
import {UserService} from "../../services/user.serice";
import {User} from "../../models/User";
import {UserRequest} from "../../models/UserRequest";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  @Input() email = ' ';
  @Input() password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    // Implement login logic here

    let isAuthentificated = this.authService.login(this.email, this.password);
      if(!isAuthentificated)
      {

        console.log("login failed");
      }


  }
}
