import { Component } from '@angular/core';
import {SelectedComponent} from "./shared/enums/selected.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedTab= 'recipe';

  onSelectedTab(selected: SelectedComponent) {
    this.selectedTab = selected.value;
  }

}
