import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserRequest} from "../../models/UserRequest";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {InputTextModule} from "primeng/inputtext";

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
  @Input() sellerRequest = false;

  @Input() backEndMessage = '';
  @Input() passwordMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }
  onSubmit() {
    if(this.password != this.confirmPassword)
    {
      this.passwordMessage = "password did not match with confirm password";
      this.confirmPassword='';
      return;
    }
    this.passwordMessage ='';


    let user = new UserRequest();
    user.email = this.email;
    user.password = this.password;
    user.name = this.username;
    user.sellerRequest = this.sellerRequest;

    this.authService.signup(user).subscribe(u=>
    {
      //console.log(`user: \n${u.id} \n${u.name} \n${u.email} \n${u.roles} `);
      this.router.navigate(['home']).then(() => {window.location.reload();});
    },
    error=>
    {
      this.backEndMessage = error.error;
    });

  }

}
