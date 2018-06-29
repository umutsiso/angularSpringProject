import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../services/recipe.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

import {Recipe} from "./models/recipe.model";

@Injectable()
export class DataStorageService {

  private uri: string = '';

  constructor(private http: Http,
              private recipeService: RecipeService) {
  }

  storeRecipes(): Observable<any> {
    return this.http.put(this.uri, this.recipeService.getRecipeObject());
  }

  getRecipes() {
    this.http.get(this.uri + '/recipes')
      .map((response: Response) => {
        const recipes: Recipe[] = response.json()
        for (let recipe of recipes) {
          if(!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
