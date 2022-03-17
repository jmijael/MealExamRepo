import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  categoryFilter : FormControl = new FormControl('');
  areaFilter : FormControl = new FormControl('');
  princingrFilter : FormControl = new FormControl('');

  categoryList : any;
  areaList : any;
  princingrList : any;

  mealResultList :any;

  constructor( private service : ApiserviceService, private router: Router,) {}

  ngOnInit(): void {
    this.service.getMealSearch("").subscribe(res=>{
      console.log(res);
      this.mealResultList = res?.meals;
    });
    this.service.getCategoryList().subscribe(res=>{
      console.log(res);
      this.categoryList = res?.meals;
    });
    this.service.getIngredientList().subscribe(res=>{
      console.log(res);
      this.princingrList = res?.meals;
    });
    this.service.getAreaList().subscribe(res=>{
      console.log(res);
      this.areaList = res?.meals;
    });
    this.categoryFilter.valueChanges.subscribe(val=>{
      this.service.getFilterMealbyCategory(val).subscribe(res=>{
          this.mealResultList = res?.meals;
        })
    })
    this.areaFilter.valueChanges.subscribe(val=>{
      this.service.getFilterMealbyArea(val).subscribe(res=>{
          console.log(res);
          this.mealResultList = res?.meals;
        })
    })
    this.princingrFilter.valueChanges.subscribe(val=>{
      this.service.getFilterMealbyIngredient(val).subscribe(res=>{
          console.log(res);
          this.mealResultList = res?.meals;
        })
    })
    // this.service.getFilterMealbyCategory("").subscribe(res=>{
    //   this.mealResultList = res;
    // })
  }
  Clean(){
    this.categoryFilter.setValue(null);
    this.areaFilter.setValue(null);
    this.princingrFilter.setValue(null);
    this.service.getMealSearch("").subscribe(res=>{
      this.mealResultList = res?.meals;
    });
  }
  ClickOption(item : any ){
    this.router.navigate(["/Meal/", item.idMeal]);
  }
}
