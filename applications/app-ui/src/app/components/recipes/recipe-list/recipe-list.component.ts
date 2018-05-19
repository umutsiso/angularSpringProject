import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Soup Recipe', 'Chicken Soup', 'https://cdn.pixabay.com/photo/2016/04/22/18/52/chicken-soup-1346310_1280.jpg'),
    new Recipe('Beef Taco', 'Taco with Beef', 'https://cdn.pixabay.com/photo/2015/11/02/20/27/taco-1018962__340.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
