import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../services/temp-data.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  data = {};
  constructor(private router: Router , public dataService: TempDataService) { }

  ngOnInit() {
  }
  registerUser(form: NgForm) {
    console.log('in register');
    event.preventDefault();
    console.log( form.value);
    console.log('done');
    form.value.whitecell = 0;
    this.dataService.registerUser(form.value).subscribe(data => {
      console.log(data);
    });
    if (this.registerUser) {
      this.router.navigate(['/login']);
    }
  }
  /*getData(let x ) {
    this.data = x;
  }*/
}
