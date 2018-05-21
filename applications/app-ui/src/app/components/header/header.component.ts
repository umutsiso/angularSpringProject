import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {SelectedComponent} from "../../shared/enums/selected.enum";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selectedEmitted = new EventEmitter<SelectedComponent>();
  selected = SelectedComponent.RECIPE;

  onRecipeSelected() {
    console.log('recipe')
    this.selected = SelectedComponent.RECIPE;
    this.selectedEmitted.emit(SelectedComponent.RECIPE);
  }

  onShoppingListSelected() {
    this.selected = SelectedComponent.SHOPPING;
    this.selectedEmitted.emit(SelectedComponent.SHOPPING);
  }
}
