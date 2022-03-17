import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginModule } from './login/login.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list';

import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { LoginComponent } from './login/pages/login/login.component';
import { MealComponent } from './home/components/meal/meal.component';
import { MealDetailComponent } from './home/components/meal-detail/meal-detail.component';
import { MealResumeComponent } from './home/components/meal-resume/meal-resume.component';
import { MealListComponent } from './home/components/meal-list/meal-list.component';
import { MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { IngredientListComponent } from './home/components/ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    MealComponent,
    MealDetailComponent,
    MealResumeComponent,
    MealListComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatAutocompleteModule,

    HttpClientModule,
    FlexLayoutModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
