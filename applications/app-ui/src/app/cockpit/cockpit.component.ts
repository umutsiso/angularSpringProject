import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  currentServers = ['serverOne', 'serverTwo'];
  myServerName = '';
  buttonClicked= false;


  constructor() {
  }

  ngOnInit() {
    // setTimeout(() => {
    //     this.btnDisabled = false;
    //   }, 2000
    // )
  }

  onCreateServer() {
    this.buttonClicked = true;
    this.currentServers.push(this.myServerName)
  }

  onDeleteServer() {
    let index = this.currentServers.indexOf(this.myServerName)
    if (index > -1)
      this.currentServers.splice(index, 1);
  }

  onUpdateServerName(event: Event) {
    this.myServerName = (<HTMLInputElement>event.target).value;
  }

  serverHasInput(){
    console.log(this.myServerName.length > 0)
    return this.myServerName.length > 0;
  }

}
