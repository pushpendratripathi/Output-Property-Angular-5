import { Component, OnInit,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 @Output() public childData = new EventEmitter();
 sendDataToPar()
 {
   this.childData.emit("This is data coming from Child.")
 }
}
