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

  @Input() email = '';
  @Input() password = '';

  constructor(private authService: AuthService, private userService : UserService) {}

  async onSubmit() {
    // Implement login logic here

     let user = new User();

     await this.authService.login(this.email, this.password).pipe().subscribe(u=>
      {
       user = u;
       if(this.authService.currentUserValue == null)
       {
         console.log("login failed");
       }
      }
     );


  }
}
