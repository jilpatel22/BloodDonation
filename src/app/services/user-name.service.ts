import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  private userName = new BehaviorSubject('User');
  currentMessage = this.userName.asObservable();

  constructor() { }

  setUsername(message: string) {
    this.userName.next(message);
  }
}
