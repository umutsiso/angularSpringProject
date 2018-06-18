import {Ingredient} from "../shared/models/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {


  private ingredientList: Ingredient[] = [
    new Ingredient('Taco Shell', 10),
    new Ingredient('Tomato', 1),
    new Ingredient('Guacamole', 1)
  ];

  ingredientChange = new Subject<Ingredient[]>();
  startedEditting = new Subject<number>();

  getIngredientList() {
    return this.ingredientList.slice();
  }

  getIngredient(i: number) {
    return this.ingredientList[i];
  }

  addIngredient(ingredient: Ingredient) {
    if (this.ingredientList.findIndex(x => x.name === ingredient.name) > -1) {
      let index = this.ingredientList.findIndex(x => x.name === ingredient.name);
      this.ingredientList[index].amount = (+ingredient.amount + +this.ingredientList[index].amount);
    } else {
      this.ingredientList.push(ingredient);
    }
    this.ingredientChange.next(this.ingredientList);
  }


  removeIngredient(ingredient: Ingredient) {
    if (this.ingredientList.findIndex(x => x.name === ingredient.name) > -1) {
      let index = this.ingredientList.findIndex(x => x.name === ingredient.name);
      if (this.ingredientList[index].amount <= ingredient.amount) {
        this.ingredientList.splice(index, 1);
      } else {
        this.ingredientList[index].amount = +this.ingredientList[index].amount - +ingredient.amount;
      }
    }
    this.ingredientChange.next(this.ingredientList);
  }

  cleanList() {
    this.ingredientList.splice(0, this.ingredientList.length);
    this.ingredientChange.next(this.ingredientList);
  }


}
