import {Component, Input} from '@angular/core';
import {UserService} from "../../services/user.serice";
import {User} from "../../models/User";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  @Input() email = '';
  @Input() password = '';

  @Input() loginFail = false;
  @Input() message = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    // Implement login logic here

     let user = new User();

     await this.authService.login(this.email, this.password)
       .subscribe((u)=>
      {
       user = u;
       this.router.navigate(['home']).then(() => {window.location.reload();});
      },
     error=>
     {
       this.loginFail = true;
       this.message = error.error;
     });
  }
}
