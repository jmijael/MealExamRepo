import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-meal-resume',
  templateUrl: './meal-resume.component.html',
  styleUrls: ['./meal-resume.component.css']
})
export class MealResumeComponent implements OnInit {
  //private data :any;
  constructor(
    public dialogRef: MatDialogRef<MealResumeComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    //this.service.getRandomMeal().subscribe(res => this.data = res);
  }
  click(){
    this.dialogRef.close();
    this.router.navigate(["/Meal/", this.data.idMeal]);
  }
}
