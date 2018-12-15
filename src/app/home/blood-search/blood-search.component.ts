import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../services/temp-data.service';
// import { UserDetails } from '../edit-profile/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blood-search',
  templateUrl: './blood-search.component.html',
  styleUrls: ['./blood-search.component.css']
})
export class BloodSearchComponent implements OnInit {
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+' , 'O-' ];
  // Area = ['Nadiad', 'Karelibaug', 'Vastrapur', 'Vaniavad', 'Subhanpura', 'ChakliCircle', 'OProad' , 'Vastral' ];
  public val;
  public area1 = [];
  public jobj;
  public j = 0;
  // public Users = [] ;
  public Users;
  // public userModel: UserDetails; // = new UserDetails();
  constructor( public dataService: TempDataService) { }

  ngOnInit() {
    // this.dataService.getUsers().subscribe(data => this.Users = data) ;
    this.dataService.getAllUser().subscribe(data => {
      console.log(data);
      if (data) {
        this.Users = data;
        // this.jobj = JSON.parse(data);
        // for ( const i of data) {
        //   if ( true) {
        //     this.area1[this.j++] = i.adress.city;
        //   }
        // }
        const lookup = {};
        const items = data;
        // var result = [];

        for (let item, i = 0; item = items[i++];) {
          const name = item.adress.city;

          if (!(name in lookup)) {
            lookup[name] = 1;
            this.area1.push(name);
          }
        }
        console.log(JSON.stringify(this.area1));
      } else {
      }
    });
    // console.log(this.userModel);
  }

  searchUser(area , bg) {
    // console.log(area);
    // console.log(bg);
    this.val = {a: area, b: bg } ;
    // console.log(this.val);
    this.dataService.searchUser(this.val).subscribe(data => {
      console.log(data);
      if (data) {
        this.Users = data;
        // this.router.navigate(['/home']);
      }
    });
  }
}
