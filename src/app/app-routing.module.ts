import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { IngredientListComponent } from './home/components/ingredient-list/ingredient-list.component';
import { MealDetailComponent } from './home/components/meal-detail/meal-detail.component';
import { MealListComponent } from './home/components/meal-list/meal-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/pages/login/login.component';

const routes: Routes = [
  {
    path : "Login",
    component : LoginComponent,
  },
  {
    path : "Home",
    canActivate: [AuthGuard],
    component : HomeComponent,
  },
  {
    path : "",
    canActivate: [AuthGuard],
    component : HomeComponent,
  },
  {
    path : "Meal/:id",
    canActivate: [AuthGuard],
    component : MealDetailComponent,
  },
  {
    path : "Meal-list",
    canActivate: [AuthGuard],
    component : MealListComponent,
  },
  {
    path : "Ingredient-list",
    canActivate: [AuthGuard],
    component : IngredientListComponent,
  },
  {
    path : "User-data",
    redirectTo : "/",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
