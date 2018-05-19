import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
