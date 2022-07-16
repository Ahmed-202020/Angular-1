import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  hintName:boolean    = false  ;
  hintEmail:boolean   = false ;
  hintPhone:boolean   = false;
  hintMessage:boolean = false;
  showHintName() {
    this.hintName = true ;
  }
  showHintEmail() {
    this.hintEmail = true ;
  }

  showHintPhone() {
    this.hintPhone = true ;
  }
  showHintMessage() {
    this.hintMessage = true ;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
