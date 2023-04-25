import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserRequest} from "../../models/UserRequest";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  @Input() email = '';
  @Input() username = '';
  @Input() password = '';
  @Input() confirmPassword = '';

  constructor(private authService: AuthService) {
  }
  onSubmit() {
    if(this.password != this.confirmPassword)
    {
      console.log("password did not match confirm password");
      this.confirmPassword='';
      return;
    }

    let user = new UserRequest();
    user.email = this.email;
    user.password = this.password;
    user.name = this.username;

    let res = this.authService.signup(user);

  }

}
