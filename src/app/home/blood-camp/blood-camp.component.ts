import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../services/temp-data.service';

@Component({
  selector: 'app-blood-camp',
  templateUrl: './blood-camp.component.html',
  styleUrls: ['./blood-camp.component.css']
})
export class BloodCampComponent implements OnInit {

  public campList = [] ;

  constructor( public dataService: TempDataService) { }

  ngOnInit() {
    this.dataService.getCampList().subscribe(data => this.campList = data) ;

  }

}
