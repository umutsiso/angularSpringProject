import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementNumber = new EventEmitter<number>();
  lastNumber = 0;
  interval;

  started: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.lastNumber = this.lastNumber + 1;
      return this.incrementNumber.emit(this.lastNumber)
    }, 1000);
    this.started = true;
  }

  onPause() {
    clearInterval(this.interval);
  }

}
