import {Component, Input} from '@angular/core';
import {UserService} from "../../services/user.serice";
import {User} from "../../models/User";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  @Input() email = '';
  @Input() password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    // Implement login logic here

     let user = new User();

     await this.authService.login(this.email, this.password)
       .pipe(
         catchError(this.handleError)
       ).subscribe((u)=>
      {
       user = u;
       this.router.navigate(['home']).then(() => {window.location.reload();});
      });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError(error.error);
  };
}
