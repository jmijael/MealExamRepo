import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  IsAuthenticated = false;
  userName :any;
  private _destroySub$ = new Subject<void>();
  constructor(
    private authService: AuthenticationService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.IsAuthenticated = this.authService.isAuthenticated$;
    this.authService.isAuthenticatedObservable.subscribe(val => this.IsAuthenticated = val);
    this.userName = this.authService.completeUserData$.name;
  }
  Logout(){
    this.authService.logout();
    this.router.navigate(["/Login"]);
  }
}
