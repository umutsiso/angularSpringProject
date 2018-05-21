import {Enum} from "./enum";

export class SelectedComponent extends Enum<string> {
  public static readonly RECIPE = new Enum('recipe');
  public static readonly SHOPPING = new Enum('shopping');
}
