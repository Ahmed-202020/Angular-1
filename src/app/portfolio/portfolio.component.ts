import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Projects } from './../projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  projects:Projects[] = [
    {image : "../../assets/images/cabin.png" , title : "LOG CABIN"} ,
    {image : "../../assets/images/cake.png" , title : "TASTY CAKE"} ,
    {image : "../../assets/images/circus.png" , title : "CIRCUS TENT"} ,
    {image : "../../assets/images/game.png" , title : "CONTROLLER"} ,
    {image : "../../assets/images/safe.png" , title : "LOCKED SAFE"} ,
    {image : "../../assets/images/submarine.png" , title : "SUBMARINE"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
