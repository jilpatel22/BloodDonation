import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CampList } from './temp-data' ;
import { Users } from './temp-data' ;
import { Observable } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  private _url = '/assets/camplist.json' ;
  private _url1 = '/assets/users.json' ;
  constructor(private http: HttpClient) { }
  getCampList(): Observable<CampList[]> {
      return this.http.get<CampList[]>(this._url);
  }
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this._url1);
}
}
