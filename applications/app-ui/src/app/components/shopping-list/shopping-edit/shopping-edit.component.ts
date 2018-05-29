import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";
import {ShoppingListService} from "../../../services/shoppping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('itemAmount') itemAmount: ElementRef;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onItemAdd() {
    this.shoppingService.addIngredient(new Ingredient(this.itemName.nativeElement.value, this.itemAmount.nativeElement.value));
  }

  onDeleteItem() {
    this.shoppingService.removeIngredient(new Ingredient(this.itemName.nativeElement.value, this.itemAmount.nativeElement.value));

  }

  onClean() {
    this.shoppingService.cleanList();
  }

}
