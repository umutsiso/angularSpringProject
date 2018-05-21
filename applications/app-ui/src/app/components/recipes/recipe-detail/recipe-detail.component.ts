import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";
import {Recipe} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ingredients: Ingredient[] = [];

  @Input() selectedRecipe: Recipe;

  constructor() { }



  ngOnInit() {
  }

}
