import {Recipe} from "../shared/models/recipe.model";
import {Injectable, OnInit} from "@angular/core";
import {Ingredient} from "../shared/models/ingredient.model";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService implements OnInit {

  constructor() {
  }

  recipeSubject: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Chicken Soup Recipe',
      'Chicken Soup',
      'https://cdn.pixabay.com/photo/2015/11/02/20/27/taco-1018962__340.jpg',
      [new Ingredient('Chicken', 1),
        new Ingredient('Tomato', 1)]),
    new Recipe('Beef Taco',
      'Taco with Beef',
      'https://cdn.pixabay.com/photo/2015/11/02/20/27/taco-1018962__340.jpg',
      [new Ingredient('Beef', 1),
        new Ingredient('Taco', 1)])
  ];

  ngOnInit() {
  }


  getRecipeObject() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeSubject.next(this.recipes.slice());
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipeSubject.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeSubject.next(this.recipes.slice());

  }


}
