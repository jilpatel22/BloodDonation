import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserNameService } from '../services/user-name.service';
import { TempDataService } from '../services/temp-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public chkLogin = true;
  username: string;
  constructor(private router: Router , private data: UserNameService, public dataService: TempDataService) { }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.username = message);
  }

  loginCheck(form: NgForm) {
    console.log('in login');
    event.preventDefault();
    console.log( form.value);
    console.log('done');
    this.dataService.loginCheck(form.value).subscribe(data => {
      console.log(data);
      if (data.success) {
        sessionStorage.setItem('user', form.value.unm);
        sessionStorage.setItem('IsLogin', 'true');
        this.router.navigate(['/home']);
      } else {
        this.chkLogin = false;
      }
    });
    // if (this.loginCheck) {
    //   sessionStorage.setItem('user', form.value);
    //   sessionStorage.setItem('IsLogin', 'true');
    //   this.router.navigate(['/home']);
    // } else {
    //   this.chkLogin = false;
    // }
  }
  /*loginCheck(a, b) {
    console.log(a);
    if ( a === 'user1' && b === 'user1') {
      // this.data.setUsername(a);
      sessionStorage.setItem('user', a);
      sessionStorage.setItem('IsLogin', 'true');
      this.router.navigate(['/home']);
      } else {
      this.chkLogin = false;
    }
  }*/
}
