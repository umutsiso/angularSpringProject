import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../../services/shoppping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredientList = this.shoppingListService.getIngredientList();
    this.shoppingListService.eventList.subscribe(
      x => {
        this.ingredientList = x;
      }
    )
  }

}
