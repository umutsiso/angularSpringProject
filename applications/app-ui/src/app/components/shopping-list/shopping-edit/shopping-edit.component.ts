import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";
import {ShoppingListService} from "../../../services/shoppping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingForm: NgForm;

  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('itemAmount') itemAmount: ElementRef;
  editSubscription: Subscription;
  editMode = false;
  indexOfEdittedItem: number;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
    this.editSubscription = this.shoppingService.startedEditting.subscribe(
      (index: number) => {
        this.indexOfEdittedItem = index;
        this.editMode = true;
        this.shoppingForm.setValue({
          'name': this.shoppingService.getIngredient(index).name,
          'amount': this.shoppingService.getIngredient(index).amount
        });
      }
    )
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }

  onItemAdd(form: NgForm) {
    const value = form.value;
    this.shoppingService.addIngredient(new Ingredient(value.name, value.amount));
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    this.shoppingService.removeIngredient(new Ingredient(this.itemName.nativeElement.value, this.itemAmount.nativeElement.value));
    this.onClean();

  }

  onClean() {
    // this.shoppingService.cleanList();
    this.shoppingForm.reset();
    this.editMode = false;
  }

}
