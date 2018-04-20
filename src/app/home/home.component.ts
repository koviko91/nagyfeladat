import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let animateArray = document.getElementsByClassName('progress-bar-striped');
    setInterval(() => {
      for (let i = 0; i < animateArray.length; i++) {
        animateArray[i]['style'].width = Math.random() * 100 + "%";
      }
    }, 500);
  }

  ngOnInit() {
  }

}
