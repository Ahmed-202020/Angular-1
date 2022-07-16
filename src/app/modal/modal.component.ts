import { Component, Input, OnInit } from '@angular/core';
import { Projects } from './../projects';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() data:any = {} ;

  constructor() {}
  ngOnInit(): void {
  }

}
