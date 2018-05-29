import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";
import {Recipe} from "../../../shared/models/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {ShoppingListService} from "../../../services/shoppping-list.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ingredients: Ingredient[] = [];

  @Input() selectedRecipe: Recipe;

  constructor(private shoppingService: ShoppingListService) { }


  onAddIngredientToShoppingList() {
    for (let currentIngredient of this.selectedRecipe.ingredients) {
      this.shoppingService.addIngredient(currentIngredient);
    }
  }

  ngOnInit() {
  }

}
