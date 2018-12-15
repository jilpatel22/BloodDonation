import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../services/temp-data.service';
import {Router} from '@angular/router';
import { UserDetails } from './User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+' , 'O-' ];
  constructor(public dataService: TempDataService , private router: Router) { }
  public userModel: UserDetails; // = new UserDetails();
  public passUnm = { unm1: sessionStorage['user']};
  ngOnInit() {
    console.log(sessionStorage['user']);
    this.dataService.getDetails(this.passUnm).subscribe(data => {
      console.log(data);
      if (data) {
        this.userModel = data;
      } else {
      }
    });
    console.log(this.userModel);
  }

  updateUser(form: NgForm) {
    console.log('in register');
    event.preventDefault();
    console.log( form.value);
    console.log('done');
    this.dataService.updateUser(form.value).subscribe(data => {
      console.log(data);
      if (data) {
        this.router.navigate(['/home']);
      }
    });
  }

}
