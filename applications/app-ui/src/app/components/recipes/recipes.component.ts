import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../shared/models/recipe.model";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  currentRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.currentRecipe = recipe;
      }
    )
  }

}
