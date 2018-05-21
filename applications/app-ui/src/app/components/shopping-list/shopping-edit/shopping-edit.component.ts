import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientList: Ingredient[] = [];

  @Output() addEvent = new EventEmitter<Ingredient>();
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() cleanEvent = new EventEmitter();


  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('itemAmount') itemAmount: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onItemAdd() {
    this.addEvent.emit(new Ingredient(this.itemName.nativeElement.value, this.itemAmount.nativeElement.value))

  }

  onDeleteItem() {
    this.deleteEvent.emit(this.itemName.nativeElement.value)
  }

  onClean() {
    this.cleanEvent.emit();
  }

}
