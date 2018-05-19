import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  indgredients: Ingredient[] = [
    new Ingredient('Taco Shell', 10),
    new Ingredient('Tomato', 1),
    new Ingredient('Guacamole', 1)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
