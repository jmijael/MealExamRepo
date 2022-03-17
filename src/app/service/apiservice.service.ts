import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  getRandomMeal() {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/random.php");
  }
  getMealById(id : Number) {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  }
  getCategoryList() {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
  }
  getAreaList() {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
  }
  getIngredientList() {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
  }
  getFilterMealbyCategory(category : string) {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category);
  }
  getFilterMealbyArea(area : string) {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + area);
  }
  getFilterMealbyIngredient(ingredient : string) {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient);
  }
  getMealSearch(search : string) {
    return this.http.get<any>("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search);
  }
}
