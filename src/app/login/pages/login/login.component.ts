import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Credentials } from 'src/app/models/credentials';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  errorAuthenticated = false;
  userForm : FormControl = new FormControl('');
  passwordForm : FormControl = new FormControl('');

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    ) { }
  OnInit(){
  }
  get isValid() : boolean
  {
    return this.userForm.valid && this.passwordForm.valid;
  }
  get Credentials() : Credentials{
    return {user: this.userForm.value, password: this.passwordForm.value};
  }
  login(){
    this.authService.login(this.Credentials).subscribe(res=>{
        this.errorAuthenticated = !res;
        if (res)
          this.router.navigate(["/"]);
    });
  }
}
