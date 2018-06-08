import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";
import {Recipe} from "../../../shared/models/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {ShoppingListService} from "../../../services/shoppping-list.service";
import {forEach} from "@angular/router/src/utils/collection";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  constructor(private shoppingService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }


  onAddIngredientToShoppingList() {
    for (let currentIngredient of this.selectedRecipe.ingredients) {
      this.shoppingService.addIngredient(currentIngredient);
    }
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
        }
      )
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
