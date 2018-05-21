import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingredient[] = [
    new Ingredient('Taco Shell', 10),
    new Ingredient('Tomato', 1),
    new Ingredient('Guacamole', 1)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdd(newIngredient: Ingredient) {
    let index = this.ingredientList.findIndex(ingredient => ingredient.name === newIngredient.name);
    if (newIngredient.name.length > 0){
      if (index === -1){
        this.ingredientList.push(new Ingredient(newIngredient.name, newIngredient.amount));
      } else {
        this.ingredientList[index].amount = (+newIngredient.amount + +this.ingredientList[index].amount);
      }
    }
  }

  onIngredientDelete(ingredientName: string) {
    let index = this.ingredientList.findIndex(ingredient => ingredient.name === ingredientName);
    if (index > -1)
      this.ingredientList.splice(index, 1);
  }

  onIngredientClean() {
    this.ingredientList.splice(0, this.ingredientList.length);
  }

}
