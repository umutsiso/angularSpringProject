import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {RecipeListComponent} from './components/recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './components/shopping-list/shopping-edit/shopping-edit.component';
import {BasicHighlightDirective} from './directives/basic-highlight/basic-highlight.directive';
import {BetterHighlightDirective} from './directives/better-highlight/better-highlight.directive';
import {UnlessDirective} from './directives/unless-structural/unless.directive';
import {DropdownDirective} from './directives/dropdown.directive.ts/dropdown.directive';
import {ShoppingListService} from "./services/shoppping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeStartComponent} from './components/recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './components/recipes/recipe-edit/recipe-edit.component';
import {RecipeService} from "./services/recipe.service";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppingListService, RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
