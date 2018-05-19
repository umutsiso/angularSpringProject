import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  serverStatus: string = 'offline'
  @Input() serverName: string;

  constructor() {
    if (Math.random() > 0.5)
      this.serverStatus = 'offline'
    else
      this.serverStatus = 'online'

  }


  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
