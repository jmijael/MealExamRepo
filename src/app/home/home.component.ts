import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { ApiserviceService } from '../service/apiservice.service';
import { MealResumeComponent } from './components/meal-resume/meal-resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Home';
  data : any;
  constructor(
    private service: ApiserviceService,
    private authService: AuthenticationService ,
    public dialog: MatDialog,
    private router: Router){}
  ngOnInit(){
    if (this.authService.isAuthenticated$)
    {
      this.service.getRandomMeal().subscribe(res => {
        this.data = res.meals.find((val: undefined)=>val!==undefined);
        console.log(this.data);
        this.openDialog();
      });
    }
    else
      this.router.navigate(["/Login"]);
    // this.authService.isAuthenticated$.subscribe(val=>{
    //   if (!val)
    //   {
    //     this.router.navigate(["/Login"]);
    //   }
    //   else{
    //     this.service.getRandomMeal().subscribe(res => {
    //       this.data = res.meals.find((val: undefined)=>val!==undefined);
    //       console.log(this.data);
    //       this.openDialog();
    //     });
    //   }
    // });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MealResumeComponent, {
      width: '600px',
      data: this.data,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.router.navigate(["/Meal/", this.data.idMeal]);
    // });
  }
}
