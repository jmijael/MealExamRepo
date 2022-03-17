import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, filter, findIndex, first, from, Observable, Subject, take } from 'rxjs';
import { Credentials, UserData } from '../models/credentials';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnDestroy{
  private userList = [
    {
      user: "user1",
      password: "user1",
      name: "user1",
      lastname: "user1",
      email: "user1"
    },
    {
      user: "admin",
      password: "admin",
      name: "admin",
      lastname: "admin",
      email: "admin"
    },
    {
      user: "user",
      password: "root",
      name: "Mijael",
      lastname: "Humpire",
      email: "mijael.humpire@globant.com"
    },
  ]


  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private completeUserData: Subject<any> = new Subject<any>();

  public get isAuthenticated$() : boolean {
    //return this.isAuthenticated.asObservable();
    return sessionStorage.getItem("userData")!="";
  }
  public get isAuthenticatedObservable() : Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
  public get completeUserData$(): any {
    //return this.completeUserData.asObservable();
    return JSON.parse(sessionStorage.getItem("userData")??"");
  }
  constructor() { 

  }
  public login(credentials: Credentials) : Observable<any>{
      
    var resultUserData = this.userList.find(u => u.user == credentials.user && u.password == credentials.password)
    if (resultUserData)
    {
      //sessionStorage.setItem("userData", resultUserData.toString());
      this.SaveSessionData(resultUserData);
      this.completeUserData.next(JSON.parse(sessionStorage.getItem("userData")??""));
      this.isAuthenticated.next(true);
    }
    else
    {
      this.isAuthenticated.next(false);
    }
    return new Observable(obs => {
      obs.next(resultUserData);
      obs.complete();
    });
  }
  public logout(){
    sessionStorage.setItem("userData", "");
    this.isAuthenticated.next(false);
    this.completeUserData.next(null);
  }
  private SaveSessionData(data : UserData){
    sessionStorage.setItem("userData", JSON.stringify(data));
    // sessionStorage.setItem("user", data.user);
    // sessionStorage.setItem("user-name", data.name);
    // sessionStorage.setItem("user-lastname", data.lastname);
    // sessionStorage.setItem("user-email", data.email);
  }
  ngOnDestroy(){
    this.logout();
  }
}
