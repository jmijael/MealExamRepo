import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientList : any;
  constructor(private service : ApiserviceService, private router: Router,) { }

  ngOnInit(): void {
    this.service.getIngredientList().subscribe(res=>{
      console.log(res)
      this.ingredientList = res?.meals;
    });
  }
ClickOption(item:any){}
}
