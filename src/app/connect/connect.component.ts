import { Component, OnInit } from '@angular/core';
import { HttpreqService } from '../httpreq.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.pug',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  lat: number = 47.461498;
  lng: number = 19.053230;
  constructor(public http: HttpreqService) {
  }

  ngOnInit() {
  }

}
