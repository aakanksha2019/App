import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
userdisplay:any;
  constructor(private dispservice:UserService) { }

  ngOnInit() {
    this.userdisplay=this.dispservice.userdetails;
  }

}
