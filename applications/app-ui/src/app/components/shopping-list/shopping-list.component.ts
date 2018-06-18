import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../../services/shoppping-list.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientList: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.ingredientList = this.shoppingListService.getIngredientList();
    this.subscription = this.shoppingListService.ingredientChange.subscribe(
      x => {
        this.ingredientList = x;
      }
    )
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditting.next(index);
  }

}
