import { Component } from '@angular/core';
import{ FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent 
{
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor()
  {
    this.loginForm.valueChanges.subscribe((value) => console.log(value))
  }

  login()
  {

  }

}

