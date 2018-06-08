import {Recipe} from "../shared/models/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {ShoppingListService} from "./shoppping-list.service";
import {Ingredient} from "../shared/models/ingredient.model";

@Injectable()
export class RecipeService {

  constructor(private shoppingService: ShoppingListService) {
  }

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

  getRecipes() {
    return this.recipes.slice(); //RETURNS A COPY OF THE ARRAY, NOT THE ACTUAL INSTANCE OF THE ARRAY
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
