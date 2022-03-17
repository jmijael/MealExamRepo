import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  data :any;
  dataIngredients : any;
  dataMeasures : any;
  constructor(
    private activatedRoute : ActivatedRoute,
    private service: ApiserviceService, ) { }

  ngOnInit(): void {
    //this.dataIngredients = [1,2,3];
    this.service.getMealById(this.activatedRoute.snapshot.params['id']).subscribe((res: any)=>{
      console.log(res);
      this.data = res.meals.find((val: undefined)=>val!==undefined);;
      this.dataIngredients = Object.entries(this.data).filter(a=> a[0].includes("strIngredient") && a[1]!="" && a[1]!=" ").map(item=> item[1]);
      this.dataMeasures = Object.entries(this.data).filter(a=> a[0].includes("strMeasure") && a[1]!="" && a[1]!=" ").map(item=> item[1]);
    });
  }
}
