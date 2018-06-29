import {Component} from "@angular/core";
import {DataStorageService} from "../../shared/data-storage.service";
import {Response} from '@angular/http'

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private dataStorage: DataStorageService) {}

  onSaveData() {
    this.dataStorage.storeRecipes().
      subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }

}
