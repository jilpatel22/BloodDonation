import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CampList } from '../temp-data' ;
import { Users } from '../temp-data' ;
import { Observable } from 'rxjs' ;
import { UserDetails } from '../home/edit-profile/User';

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
  registerUser( body: any) {
    return this.http.post<any>('/backend/register', body);
  }
  loginCheck( body: any) {
    return this.http.post<any>('/backend/login', body);
  }
  getDetails( body: any) {
    return this.http.post<any>('/backend/getDetails', body);
  }
  updateUser( body: any) {
    return this.http.post<any>('/backend/updateUser', body);
  }
  getAllUser(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>('/backend/getAllUser');
  }
  searchUser( a: any): Observable<UserDetails[]> {
    return this.http.post<UserDetails[]>('/backend/searchUser', a);
  }
}
