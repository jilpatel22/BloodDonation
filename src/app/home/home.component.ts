import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserNameService } from '../services/user-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  IsLogin: string;
  public unm: string = sessionStorage.getItem('user');

  constructor(private data: UserNameService) {
    this.IsLogin = sessionStorage.getItem('IsLogin');
   }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.username = message);
  }
  public Logout() {
    sessionStorage.setItem('IsLogin', 'false');
  }

}
