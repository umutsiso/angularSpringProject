import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collectedNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    this.collectedNumbers.push(firedNumber)
    console.log(firedNumber);
  }
}
