import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  @ViewChild('serverContentInput') serverContentInput;

  constructor() {
  }

  ngOnInit() {

  }

  onAddServer(newServerName: string) {
    this.serverCreated.emit({serverName: newServerName, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(newServerName: string) {
    this.blueprintCreated.emit({blueprintName: newServerName, blueprintContent: this.serverContentInput.nativeElement.value});
  }


}
