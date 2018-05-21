import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()recipe: Recipe;
  @Output() recipeEvent = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.recipeEvent.emit(this.recipe);
  }

}
